import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smmum7bpy.css';
import '../../css/f/f5mommnqj.css';

const viewBox = {"width":1536,"height":1530};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVG8XNTSbIi" clipPathUnits="userSpaceOnUse"><path class="smmum7bpy"/></clipPath></defs><g clip-path="url(#SVG8XNTSbIi)"><path class="f5mommnqj"/></g>`,
		"fallback": "thesvg-color:muangthai-capital-light",
	});
}

export default Component;
