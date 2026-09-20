import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/m/maq17k.css';
import '../../css/u/ujphdc.css';
import '../../css/s/so-from-60.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c maq17k"/><path class="a0m25c ujphdc"/>`,
		"fallback": "line-md:minus-circle",
	});
}

export default Component;
