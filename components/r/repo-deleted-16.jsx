import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4gl7ubxp.css';
import '../../css/m/m76ihyh3s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4gl7ubxp"/><path class="m76ihyh3s"/>`,
		"fallback": "octicon:repo-deleted-16",
	});
}

export default Component;
