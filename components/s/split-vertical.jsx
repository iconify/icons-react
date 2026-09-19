import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf1ga9s9a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf1ga9s9a"/>`,
		"fallback": "codicon:split-vertical",
	});
}

export default Component;
