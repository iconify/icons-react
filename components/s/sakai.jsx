import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n71x7dmep.css';
import '../../css/p/pn1njdbsv.css';
import '../../css/e/egyo28bpl.css';
import '../../css/w/w27nj6boa.css';
import '../../css/e/ey8ys0b_w.css';
import '../../css/p/p7nckabqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n71x7dmep"/><path class="pn1njdbsv"/><path class="egyo28bpl"/><path class="w27nj6boa"/><path class="ey8ys0b_w"/><path class="p7nckabqx"/>`,
		"fallback": "token:sakai",
	});
}

export default Component;
