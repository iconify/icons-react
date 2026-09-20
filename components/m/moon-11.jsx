import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsa_t_p5s.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsa_t_p5s"/>`,
		"fallback": "wi:moon-11",
	});
}

export default Component;
