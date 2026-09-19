import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3by5zb1g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c3by5zb1g"/>`,
		"fallback": "gravity-ui:square-list-ul",
	});
}

export default Component;
