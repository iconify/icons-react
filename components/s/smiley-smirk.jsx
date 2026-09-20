import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/axoj8tbup.css';
import '../../css/r/r2th9g7qg.css';
import '../../css/f/f-7wisb7w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="axoj8tbup"/><path class="r2th9g7qg"/><path class="f-7wisb7w"/></g>`,
		"fallback": "streamline:smiley-smirk",
	});
}

export default Component;
