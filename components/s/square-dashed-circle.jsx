import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn9yt1bop.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rn9yt1bop"/>`,
		"fallback": "gravity-ui:square-dashed-circle",
	});
}

export default Component;
