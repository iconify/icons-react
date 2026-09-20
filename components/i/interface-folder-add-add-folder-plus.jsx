import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4b2zt-qo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4b2zt-qo"/>`,
		"fallback": "streamline:interface-folder-add-add-folder-plus",
	});
}

export default Component;
