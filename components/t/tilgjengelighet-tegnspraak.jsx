import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa5b_b6dr.css';
import '../../css/r/rvpd67bjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa5b_b6dr"/><path class="rvpd67bjq"/>`,
		"fallback": "nrk:tilgjengelighet-tegnspraak",
	});
}

export default Component;
