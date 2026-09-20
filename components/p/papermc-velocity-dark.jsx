import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qja8evbtd.css';
import '../../css/q/qitu6dbyz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qja8evbtd"/><path class="qitu6dbyz"/>`,
		"fallback": "selfhst:papermc-velocity-dark",
	});
}

export default Component;
