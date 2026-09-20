import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be6gqg1nw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="be6gqg1nw"/>`,
		"fallback": "teenyicons:ripple-solid",
	});
}

export default Component;
