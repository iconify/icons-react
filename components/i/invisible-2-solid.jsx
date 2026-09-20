import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohfh2ubyt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohfh2ubyt"/>`,
		"fallback": "streamline-plump:invisible-2-solid",
	});
}

export default Component;
