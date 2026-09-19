import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyio3f53g.css';
import '../../css/i/i-6ptsbat.css';
import '../../css/q/qxr-7ycpx.css';
import '../../css/z/zc79zwb6g.css';
import '../../css/p/pesx1hb2t.css';
import '../../css/r/rtivnsbjy.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted wyio3f53g"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted i-6ptsbat"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted qxr-7ycpx"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted zc79zwb6g"/><path class="clr-i-outline--alerted clr-i-outline-path-5--alerted pesx1hb2t"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-6--alerted rtivnsbjy"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:server-outline-alerted",
	});
}

export default Component;
