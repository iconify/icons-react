import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou0tc8obk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou0tc8obk"/>`,
		"fallback": "selfhst:makers-vault-light",
	});
}

export default Component;
