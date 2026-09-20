import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az01fdz1x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az01fdz1x"/>`,
		"fallback": "teenyicons:spreadsheet-outline",
	});
}

export default Component;
