import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l46kd7boi.css';
import '../../css/r/rdwksvbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l46kd7boi"/><path class="rdwksvbtr"/>`,
		"fallback": "streamline-ultimate:science-molecule-bold",
	});
}

export default Component;
