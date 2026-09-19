import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg5v6ebyq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg5v6ebyq"/>`,
		"fallback": "codicon:server-process",
	});
}

export default Component;
