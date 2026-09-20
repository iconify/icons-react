import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc229nbpl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sc229nbpl"/>`,
		"fallback": "lsicon:warehouse-into-filled",
	});
}

export default Component;
