import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb7byjbii.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb7byjbii"/>`,
		"fallback": "pinhead:vending-machine-with-drink-cup-with-steam",
	});
}

export default Component;
