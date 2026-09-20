import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/b/b7whokbto.css';
import '../../css/h/hly-i-3lx.css';

const viewBox = {"width":548,"height":322};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGyX85CbGX)" clip-rule="evenodd" class="kvn14gsjy"><path class="b7whokbto"/></g><defs><clipPath id="SVGyX85CbGX"><path class="hly-i-3lx"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:mindstudio",
	});
}

export default Component;
