import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygif-0zjx.css';
import '../../css/v/v5gp01b5h.css';
import '../../css/l/l4t-_sbed.css';
import '../../css/g/gtb-nw37z.css';
import '../../css/u/uq8obbc2d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygif-0zjx"/><ellipse class="v5gp01b5h"/><ellipse class="l4t-_sbed"/><ellipse class="gtb-nw37z"/><ellipse class="uq8obbc2d"/>`,
		"fallback": "ion:paw-sharp",
	});
}

export default Component;
