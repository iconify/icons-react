import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqk2l_13t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqk2l_13t"/>`,
		"fallback": "akar-icons:octagon-fill",
	});
}

export default Component;
