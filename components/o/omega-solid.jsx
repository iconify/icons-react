import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4basgbfp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h4basgbfp"/>`,
		"fallback": "teenyicons:omega-solid",
	});
}

export default Component;
