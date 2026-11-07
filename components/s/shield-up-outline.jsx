import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q92_u99ez.css';
import '../../css/c/cwtinvbzw.css';
import '../../css/q/qwjuf14gw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q92_u99ez"/><path class="cwtinvbzw"/><path clip-rule="evenodd" class="qwjuf14gw"/>`,
		"fallback": "solar:shield-up-outline",
	});
}

export default Component;
