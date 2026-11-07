import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dwa9fqbkg.css';
import '../../css/c/c8qz4oc-t.css';
import '../../css/f/fenutzb3t.css';
import '../../css/d/d01mapbla.css';
import '../../css/s/sgbwwsltw.css';
import '../../css/t/t_x7vabpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dwa9fqbkg"/><path class="c8qz4oc-t"/><path class="fenutzb3t"/><path class="d01mapbla"/><path class="sgbwwsltw"/><path class="t_x7vabpv"/></g>`,
		"fallback": "solar:video-frame-cut-linear",
	});
}

export default Component;
