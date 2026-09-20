import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnmef8g9b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnmef8g9b"/>`,
		"fallback": "octicon:pencil-ai-16",
	});
}

export default Component;
