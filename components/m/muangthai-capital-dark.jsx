import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smmum7bpy.css';
import '../../css/p/p68xdn8du.css';

const viewBox = {"width":1536,"height":1530};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVG8XNTSbIi" clipPathUnits="userSpaceOnUse"><path class="smmum7bpy"/></clipPath></defs><g clip-path="url(#SVG8XNTSbIi)"><path class="p68xdn8du"/></g>`,
		"fallback": "thesvg-color:muangthai-capital-dark",
	});
}

export default Component;
