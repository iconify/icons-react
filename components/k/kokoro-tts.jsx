import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eapp-bwan.css';
import '../../css/a/awotvxbnd.css';
import '../../css/s/s-kif6i1z.css';
import '../../css/h/hctt3acdl.css';
import '../../css/d/dne0f28rx.css';
import '../../css/x/xx1iqsb0m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eapp-bwan"/><path class="awotvxbnd"/><path class="s-kif6i1z"/><path class="hctt3acdl"/><path d="M10 4s2-2 4 0s4 0 4 0" class="dne0f28rx"><animate attributeName="d" dur="2s" repeatCount="indefinite" values="M10 4c0 0 2-2 4 0s4 0 4 0; M10 2c0 0 2-2 4 0s4 0 4 0; M10 4c0 0 2-2 4 0s4 0 4 0"/></path><path d="M10 4s2-2 4 0s4 0 4 0" class="xx1iqsb0m"><animate attributeName="d" dur="2s" repeatCount="indefinite" values="M10 4c0 0 2-2 4 0s4 0 4 0; M10 2c0 0 2-2 4 0s4 0 4 0; M10 4c0 0 2-2 4 0s4 0 4 0"/></path>`,
		"fallback": "thesvg-color:kokoro-tts",
	});
}

export default Component;
