import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyjjsdb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyjjsdb6p"/>`,
		"fallback": "akar-icons:triangle-left",
	});
}

export default Component;
