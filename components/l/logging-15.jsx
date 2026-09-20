import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw-wtubas.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw-wtubas"/>`,
		"fallback": "maki:logging-15",
	});
}

export default Component;
