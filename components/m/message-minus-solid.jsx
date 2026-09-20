import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huke5hvmf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="huke5hvmf"/>`,
		"fallback": "teenyicons:message-minus-solid",
	});
}

export default Component;
