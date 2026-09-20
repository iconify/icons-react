import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/s/ssaqwk.css';
import '../../css/b/b6e05i.css';
import '../../css/b/blqfnz.css';
import '../../css/s/so-from-16.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ssaqwk"/><path class="a0m25c b6e05i"/><path class="a0m25c blqfnz"/>`,
		"fallback": "line-md:menu",
	});
}

export default Component;
