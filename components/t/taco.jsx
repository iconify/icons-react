import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/s/s2s9oh.css';
import '../../css/u/ubssyn.css';
import '../../css/s/so-from-18.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c s2s9oh"/><path class="a0m25c ubssyn"/>`,
		"fallback": "line-md:taco",
	});
}

export default Component;
