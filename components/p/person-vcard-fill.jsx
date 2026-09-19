import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqq74hb5o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqq74hb5o"/>`,
		"fallback": "bi:person-vcard-fill",
	});
}

export default Component;
