import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djeo3r.css';
import '../../css/q/q7qpvx.css';
import '../../css/v/vutizf.css';
import '../../css/a/ainywl.css';
import '../../css/n/n53t9u.css';
import '../../css/n/nf43cj.css';
import '../../css/l/lprv6a.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-48.css';
import '../../css/f/fill-to-1.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPbIDAbLY"><path class="djeo3r q7qpvx vutizf"/><path class="ainywl n53t9u nf43cj vutizf"/><path class="n53t9u q7qpvx vutizf"/><circle class="lprv6a nf43cj"/></mask></defs><path mask="url(#SVGPbIDAbLY)" class="botfzx"/>`,
		"fallback": "line-md:map-marker-multiple-filled",
	});
}

export default Component;
