import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqlf7ffub.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mqlf7ffub"/>`,
		"fallback": "teenyicons:logout-solid",
	});
}

export default Component;
