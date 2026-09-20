import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjfal4j5x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjfal4j5x"/>`,
		"fallback": "streamline-plump-color:toilet-man-flat",
	});
}

export default Component;
