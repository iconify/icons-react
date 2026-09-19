import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekkdwpuvf.css';
import '../../css/j/j203agb9e.css';
import '../../css/g/g440f-byn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ekkdwpuvf"/><path clip-rule="evenodd" class="j203agb9e"/><path class="g440f-byn"/></g>`,
		"fallback": "devicon:n8n-wordmark",
	});
}

export default Component;
