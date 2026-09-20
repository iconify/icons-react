import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvjr5w14b.css';
import '../../css/l/l_b7ufbnd.css';
import '../../css/c/cre601bev.css';
import '../../css/i/io-ffjb-u.css';
import '../../css/z/zeqvf597f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvjr5w14b"/><path class="l_b7ufbnd"/><path class="cre601bev"/><path class="io-ffjb-u"/><path class="zeqvf597f"/>`,
		"fallback": "selfhst:microsoft-excel-light",
	});
}

export default Component;
