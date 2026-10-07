import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp2n0tx7g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp2n0tx7g"/>`,
		"fallback": "selfhst:msgvault-dark",
	});
}

export default Component;
