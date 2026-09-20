import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5nok1bpn.css';
import '../../css/t/ty41gwbjw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5nok1bpn"/><path class="ty41gwbjw"/>`,
		"fallback": "selfhst:voidauth-dark",
	});
}

export default Component;
