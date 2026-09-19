import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/g/goy46m0vl.css';
import '../../css/i/io6y9gbhj.css';
import '../../css/q/qdp_78ivj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="goy46m0vl"/><path class="io6y9gbhj"/><path class="qdp_78ivj"/>`,
		"fallback": "fxemoji:tired",
	});
}

export default Component;
