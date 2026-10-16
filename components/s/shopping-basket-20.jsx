import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_cl9xend.css';
import '../../css/t/toul2psij.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_cl9xend"/><path class="toul2psij"/>`,
		"fallback": "energy-icons:shopping-basket-20",
	});
}

export default Component;
