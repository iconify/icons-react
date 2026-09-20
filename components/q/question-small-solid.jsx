import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdryi132l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hdryi132l"/>`,
		"fallback": "teenyicons:question-small-solid",
	});
}

export default Component;
