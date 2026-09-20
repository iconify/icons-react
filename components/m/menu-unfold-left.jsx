import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/d/dr9w-e.css';
import '../../css/g/gdztes.css';
import '../../css/q/q9r29g.css';
import '../../css/d/dq9vho.css';
import '../../css/s/so-from-12.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c dr9w-e"/><path class="a0m25c gdztes"/><path class="a0m25c q9r29g"/><path class="a0m25c dq9vho"/>`,
		"fallback": "line-md:menu-unfold-left",
	});
}

export default Component;
