import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr1rmbctj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr1rmbctj"/>`,
		"fallback": "gravity-ui:sparkles-fill",
	});
}

export default Component;
