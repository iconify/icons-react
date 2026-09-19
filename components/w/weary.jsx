import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/g/g2dlk-oyv.css';
import '../../css/e/esm70_z4f.css';
import '../../css/h/hkfkufblm.css';
import '../../css/x/x_19xtp2u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="g2dlk-oyv"/><path class="esm70_z4f"/><path class="hkfkufblm"/><path class="x_19xtp2u"/>`,
		"fallback": "fxemoji:weary",
	});
}

export default Component;
