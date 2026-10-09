import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3q0gfbmt.css';
import '../../css/x/x9yxr3ber.css';
import '../../css/z/ztzxys0fx.css';
import '../../css/k/kp6-thbki.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3q0gfbmt"/><path class="x9yxr3ber"/><path class="ztzxys0fx"/><path class="kp6-thbki"/>`,
		"fallback": "energy-icons:vehicle-to-home-20",
	});
}

export default Component;
