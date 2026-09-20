import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3nk_yjdb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c3nk_yjdb"/>`,
		"fallback": "teenyicons:message-x-solid",
	});
}

export default Component;
