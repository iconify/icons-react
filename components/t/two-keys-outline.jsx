import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qepuaqbvx.css';
import '../../css/d/de85-5bgy.css';
import '../../css/v/v_z2_2ozx.css';
import '../../css/p/p-_uobtrq.css';
import '../../css/v/vwxfq0epe.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)" class="qepuaqbvx"><path class="de85-5bgy"/><ellipse transform="rotate(-14 10.82 7.266)" class="v_z2_2ozx"/><path class="p-_uobtrq"/><ellipse transform="rotate(-14 17.203 10.984)" class="vwxfq0epe"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "bitcoin-icons:two-keys-outline",
	});
}

export default Component;
