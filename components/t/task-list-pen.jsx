import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omg2x9c5d.css';
import '../../css/r/r887q9nnn.css';
import '../../css/i/iuephsr1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omg2x9c5d"/><path class="r887q9nnn"/><path class="iuephsr1i"/>`,
		"fallback": "streamline-freehand:task-list-pen",
	});
}

export default Component;
