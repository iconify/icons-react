import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn29a_4bt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hn29a_4bt"/>`,
		"fallback": "teenyicons:link-remove-solid",
	});
}

export default Component;
