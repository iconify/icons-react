import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_19l7b3r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_19l7b3r"/>`,
		"fallback": "fa7-solid:person-arrow-up-from-line",
	});
}

export default Component;
