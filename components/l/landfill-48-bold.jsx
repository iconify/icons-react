import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg667-8na.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg667-8na"/>`,
		"fallback": "energy-icons:landfill-48-bold",
	});
}

export default Component;
