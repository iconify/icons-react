import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc0ucyjua.css';
import '../../css/c/c-ehkdbnh.css';
import '../../css/l/llb7ncbpf.css';
import '../../css/q/q0xn5iwfb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc0ucyjua"/><path class="c-ehkdbnh"/><path class="llb7ncbpf"/><path class="q0xn5iwfb"/>`,
		"fallback": "devicon:subversion-wordmark",
	});
}

export default Component;
