import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia85dv29k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ia85dv29k"/>`,
		"fallback": "teenyicons:question-solid",
	});
}

export default Component;
