import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbr-kl8vw.css';
import '../../css/j/j7zcxhbcw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbr-kl8vw"/><path clip-rule="evenodd" class="j7zcxhbcw"/>`,
		"fallback": "teenyicons:mov-solid",
	});
}

export default Component;
