import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtw8rr_zf.css';
import '../../css/i/iobb8rqav.css';
import '../../css/h/hropn6brf.css';
import '../../css/q/qbh039box.css';
import '../../css/m/mm3jg4h2w.css';
import '../../css/w/wu3f99bbv.css';
import '../../css/g/grs6nfz-a.css';
import '../../css/c/coysa9b7m.css';
import '../../css/f/f3g768bvj.css';
import '../../css/i/i7stxwbbk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGeiR54lGj" x1="-2901.952" x2="-2061.249" y1="923.573" y2="1420.331" gradientTransform="matrix(.01123 0 0 -.01123 137.366 9.007)" gradientUnits="userSpaceOnUse"><stop offset="0" class="xtw8rr_zf"/><stop offset="1" class="iobb8rqav"/></linearGradient><linearGradient id="SVGZ4Xvxbdw" x1="-2882.7" x2="-2206.249" y1="10288.81" y2="10288.81" gradientTransform="matrix(.01123 0 0 -.01123 137.366 9.007)" gradientUnits="userSpaceOnUse"><stop offset="0" class="hropn6brf"/><stop offset="1" class="qbh039box"/></linearGradient><radialGradient id="SVGWlpoocaS" cx="-14217.448" cy="7277.705" r="898.12" gradientTransform="matrix(-.01079 -.00162 -.00328 .02158 13.8 -251.794)" gradientUnits="userSpaceOnUse"><stop offset="0" class="mm3jg4h2w"/><stop offset="1" class="wu3f99bbv"/></radialGradient></defs><path fill="url(#SVGeiR54lGj)" transform="translate(0 76.601)scale(.5412)" class="grs6nfz-a"/><path fill="url(#SVGZ4Xvxbdw)" transform="translate(0 76.601)scale(.5412)" class="coysa9b7m"/><path fill="url(#SVGWlpoocaS)" transform="translate(0 76.601)scale(.5412)" class="f3g768bvj"/><path class="i7stxwbbk"/>`,
		"fallback": "devicon:microsoftsqlserver-wordmark",
	});
}

export default Component;
