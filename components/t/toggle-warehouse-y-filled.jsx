import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrhf_hbwp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wrhf_hbwp"/>`,
		"fallback": "lsicon:toggle-warehouse-y-filled",
	});
}

export default Component;
