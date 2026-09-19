import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zukjy8b-i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zukjy8b-i"/>`,
		"fallback": "devicon-plain:unifiedmodelinglanguage",
	});
}

export default Component;
