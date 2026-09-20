import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5y0dqg8g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d5y0dqg8g"/>`,
		"fallback": "pajamas:issue-type-incident",
	});
}

export default Component;
