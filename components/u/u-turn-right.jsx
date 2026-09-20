import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/i/i15xoo.css';
import '../../css/t/th6o3g.css';
import '../../css/s/so-from-36.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c i15xoo"/><path class="a0m25c th6o3g"/>`,
		"fallback": "line-md:u-turn-right",
	});
}

export default Component;
