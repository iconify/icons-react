import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_reqgbqv.css';
import '../../css/l/la3dn2r7d.css';
import '../../css/u/ubtst-b_b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_reqgbqv"/><path class="la3dn2r7d"/><path class="ubtst-b_b"/>`,
		"fallback": "energy-icons:jerrycan-20",
	});
}

export default Component;
