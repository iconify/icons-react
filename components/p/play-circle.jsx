import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hodzw-baf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hodzw-baf"/>`,
		"fallback": "codicon:play-circle",
	});
}

export default Component;
