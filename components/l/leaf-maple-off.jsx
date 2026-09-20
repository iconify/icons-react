import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hizdu8pqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hizdu8pqq"/>`,
		"fallback": "mdi:leaf-maple-off",
	});
}

export default Component;
