import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi8be4b8f.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rb6z_dbtz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGe8XTUbxL" class="xi8be4b8f"/></defs><mask id="SVGpZtlpbaw" class="cuyn6tgcc"><use href="#SVGe8XTUbxL"/></mask><g class="cuyn6tgcc"><use href="#SVGe8XTUbxL"/><path mask="url(#SVGpZtlpbaw)" class="rb6z_dbtz"/></g>`,
		"fallback": "radix-icons:panel-bottom-minimized",
	});
}

export default Component;
