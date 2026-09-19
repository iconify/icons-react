import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umgqinbui.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umgqinbui"/>`,
		"fallback": "gravity-ui:sparkles",
	});
}

export default Component;
