import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-5rtbc3z.css';
import '../../css/d/dmy5xccsm.css';
import '../../css/a/a-zb912jr.css';
import '../../css/c/cwjhe7-en.css';
import '../../css/s/s50twd9vz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-5rtbc3z"/><path class="dmy5xccsm"/><path class="a-zb912jr"/><path class="cwjhe7-en"/><path class="s50twd9vz"/>`,
		"fallback": "devicon:stenciljs-wordmark",
	});
}

export default Component;
