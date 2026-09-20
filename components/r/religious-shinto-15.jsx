import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-4cpzbuf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-4cpzbuf"/>`,
		"fallback": "maki:religious-shinto-15",
	});
}

export default Component;
