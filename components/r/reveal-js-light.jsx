import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk87_smea.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk87_smea"/>`,
		"fallback": "selfhst:reveal-js-light",
	});
}

export default Component;
