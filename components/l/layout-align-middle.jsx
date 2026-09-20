import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgaxh98rp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgaxh98rp"/>`,
		"fallback": "tabler:layout-align-middle",
	});
}

export default Component;
