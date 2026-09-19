import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inl2g9ceq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inl2g9ceq"/>`,
		"fallback": "ci:keyboard",
	});
}

export default Component;
