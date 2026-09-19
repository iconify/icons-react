import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xec3vnbkw.css';
import '../../css/a/ae1yn9bmd.css';
import '../../css/g/gebol1b0i.css';
import '../../css/c/cscnp3bfr.css';
import '../../css/i/ivkqi0byd.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted xec3vnbkw"/><path class="ae1yn9bmd clr-i-outline--alerted clr-i-outline-path-2--alerted"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted gebol1b0i"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted cscnp3bfr"/><path class="clr-i-outline--alerted clr-i-outline-path-5--alerted ivkqi0byd"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-6--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:rack-server-outline-alerted",
	});
}

export default Component;
