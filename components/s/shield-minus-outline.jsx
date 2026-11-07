import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty867ghkp.css';
import '../../css/q/qwjuf14gw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty867ghkp"/><path clip-rule="evenodd" class="qwjuf14gw"/>`,
		"fallback": "solar:shield-minus-outline",
	});
}

export default Component;
