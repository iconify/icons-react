import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7q918bhw.css';
import '../../css/q/qmjk3ab0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7q918bhw"/><path class="qmjk3ab0b"/>`,
		"fallback": "mingcute:more-1-line",
	});
}

export default Component;
