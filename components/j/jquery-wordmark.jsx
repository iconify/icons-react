import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk77iabep.css';
import '../../css/i/it3-pwbqu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk77iabep"/><path class="it3-pwbqu"/>`,
		"fallback": "devicon:jquery-wordmark",
	});
}

export default Component;
