import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v33e6obfz.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGOr9jDdOA" class="v33e6obfz"/></defs><g class="ft5dv1b6b"><use href="#SVGOr9jDdOA"/><use href="#SVGOr9jDdOA" class="p_3zmsvya"/></g>`,
		"fallback": "tdesign:quote",
	});
}

export default Component;
