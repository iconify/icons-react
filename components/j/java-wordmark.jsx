import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf01wqb4c.css';
import '../../css/q/qj13gtc2h.css';
import '../../css/j/jtfbv-bnv.css';
import '../../css/x/xuqm0f2fo.css';
import '../../css/i/i6tw5kb9y.css';
import '../../css/j/jt8pvff9z.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf01wqb4c"/><path class="qj13gtc2h"/><path class="jtfbv-bnv"/><path class="xuqm0f2fo"/><path class="i6tw5kb9y"/><path class="jt8pvff9z"/>`,
		"fallback": "devicon:java-wordmark",
	});
}

export default Component;
