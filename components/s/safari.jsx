import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r309-c0lg.css';
import '../../css/e/er4xdd6kj.css';
import '../../css/v/vrmk6l30f.css';
import '../../css/k/ky98k8bjp.css';
import '../../css/o/o6zsv6m1i.css';
import '../../css/w/wp5ok5rrf.css';
import '../../css/q/qmt866-mn.css';
import '../../css/u/uvv4dfb6n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGDKFgEpKF" x1="295.835" x2="295.835" y1="274.049" y2="272.933" gradientTransform="matrix(112 0 0 -112 -33069.5 30695)" gradientUnits="userSpaceOnUse"><stop offset="0" class="r309-c0lg"/><stop offset="1" class="er4xdd6kj"/></linearGradient><circle fill="url(#SVGDKFgEpKF)" class="vrmk6l30f"/><path class="ky98k8bjp"/><path class="o6zsv6m1i"/><path class="wp5ok5rrf"/><path class="qmt866-mn"/><path class="uvv4dfb6n"/>`,
		"fallback": "devicon:safari",
	});
}

export default Component;
