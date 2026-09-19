import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z916odbjm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z916odbjm"/>`,
		"fallback": "garden:plug-fill-12",
	});
}

export default Component;
