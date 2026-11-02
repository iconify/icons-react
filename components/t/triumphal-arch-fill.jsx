import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1sk0j9gp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1sk0j9gp"/>`,
		"fallback": "mingcute:triumphal-arch-fill",
	});
}

export default Component;
