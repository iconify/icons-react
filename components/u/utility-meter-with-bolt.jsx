import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qustj7cbn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qustj7cbn"/>`,
		"fallback": "pinhead:utility-meter-with-bolt",
	});
}

export default Component;
