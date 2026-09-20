import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j20ns8dno.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j20ns8dno"/>`,
		"fallback": "teenyicons:layers-subtract-solid",
	});
}

export default Component;
