import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/a/ayb8wv.css';
import '../../css/i/ip662n.css';
import '../../css/s/so-from-46.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ayb8wv"/><path class="a0m25c ip662n"/>`,
		"fallback": "line-md:lightbulb",
	});
}

export default Component;
