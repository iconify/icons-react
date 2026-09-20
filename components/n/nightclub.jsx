import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enw5fd1wr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enw5fd1wr"/>`,
		"fallback": "maki:nightclub",
	});
}

export default Component;
