import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/t/tjrofo.css';
import '../../css/y/ytq47d.css';
import '../../css/c/c1-jzh.css';
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
		"content": `<path class="a0m25c tjrofo"/><path class="a0m25c ytq47d"/><path class="a0m25c c1-jzh"/>`,
		"fallback": "line-md:log-in",
	});
}

export default Component;
