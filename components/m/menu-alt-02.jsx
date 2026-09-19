import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esqfgjb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esqfgjb-a"/>`,
		"fallback": "ci:menu-alt-02",
	});
}

export default Component;
