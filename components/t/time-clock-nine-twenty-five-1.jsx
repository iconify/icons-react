import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6tui-2gp.css';
import '../../css/w/wyvbzqpgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6tui-2gp"/><path class="wyvbzqpgo"/>`,
		"fallback": "streamline-freehand:time-clock-nine-twenty-five-1",
	});
}

export default Component;
