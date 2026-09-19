import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha7yqp6ru.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha7yqp6ru"/>`,
		"fallback": "at-icons:shocked-face",
	});
}

export default Component;
