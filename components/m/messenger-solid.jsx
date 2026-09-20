import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj98w8b9c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bj98w8b9c"/>`,
		"fallback": "teenyicons:messenger-solid",
	});
}

export default Component;
