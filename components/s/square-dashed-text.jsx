import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkqbgz0qe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xkqbgz0qe"/>`,
		"fallback": "gravity-ui:square-dashed-text",
	});
}

export default Component;
