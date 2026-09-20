import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw_efn0ek.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw_efn0ek"/>`,
		"fallback": "selfhst:opensuse-alp-dark",
	});
}

export default Component;
