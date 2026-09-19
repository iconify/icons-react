import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpe0vbb-w.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpe0vbb-w"/>`,
		"fallback": "f7:lightbulb-slash-fill",
	});
}

export default Component;
