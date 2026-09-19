import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp05wnb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dp05wnb8p"/>`,
		"fallback": "gg:mail",
	});
}

export default Component;
