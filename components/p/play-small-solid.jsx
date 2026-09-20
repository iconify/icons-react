import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djo0k6nzu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djo0k6nzu"/>`,
		"fallback": "teenyicons:play-small-solid",
	});
}

export default Component;
