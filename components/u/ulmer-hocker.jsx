import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbty41bjk.css';
import '../../css/l/ly05x8yuz.css';
import '../../css/s/s2n2dsdnp.css';
import '../../css/c/c10q8ac-p.css';
import '../../css/l/la7plsbtq.css';
import '../../css/j/j5j5e9ook.css';
import '../../css/j/jwy-aecxx.css';
import '../../css/v/v6f2x6n9y.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbty41bjk"/><path class="ly05x8yuz"/><path class="s2n2dsdnp"/><path class="c10q8ac-p"/><path class="la7plsbtq"/><path class="j5j5e9ook"/><path class="jwy-aecxx"/><ellipse transform="rotate(-59.674 45.739 48.62)" class="v6f2x6n9y"/>`,
		"fallback": "openmoji:ulmer-hocker",
	});
}

export default Component;
