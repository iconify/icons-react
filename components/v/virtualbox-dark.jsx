import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl06gbc5c.css';
import '../../css/b/be5fe-z3x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl06gbc5c"/><path class="be5fe-z3x"/>`,
		"fallback": "selfhst:virtualbox-dark",
	});
}

export default Component;
