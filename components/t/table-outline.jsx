import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1cz-gh7y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1cz-gh7y"/>`,
		"fallback": "teenyicons:table-outline",
	});
}

export default Component;
