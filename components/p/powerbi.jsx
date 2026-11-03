import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o19ptqc3p.css';
import '../../css/c/cequoob6b.css';
import '../../css/h/hn2esfblp.css';
import '../../css/l/lgwa88bup.css';
import '../../css/n/n0udsn-ap.css';
import '../../css/y/y_k8pxk6b.css';
import '../../css/n/n1iyzobfj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGtUCaCeTJ" x1="62.224" x2="118.486" y1="0" y2="119.258" gradientUnits="userSpaceOnUse"><stop offset="0" class="o19ptqc3p"/><stop offset="1" class="cequoob6b"/></linearGradient><linearGradient id="SVGJ1joleoD" x1="42.666" x2="89.981" y1="32" y2="123.766" gradientUnits="userSpaceOnUse"><stop offset="0" class="hn2esfblp"/><stop offset="1" class="o19ptqc3p"/></linearGradient><linearGradient id="SVGGppNOdpz" x1="15.997" x2="42.144" y1="64" y2="125.968" gradientUnits="userSpaceOnUse"><stop offset="0" class="lgwa88bup"/><stop offset="1" class="hn2esfblp"/></linearGradient></defs><path fill="url(#SVGtUCaCeTJ)" class="n0udsn-ap"/><path fill="url(#SVGJ1joleoD)" class="y_k8pxk6b"/><path fill="url(#SVGGppNOdpz)" class="n1iyzobfj"/>`,
		"fallback": "devicon:powerbi",
	});
}

export default Component;
