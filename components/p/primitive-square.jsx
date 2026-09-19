import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8aluvbjy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v8aluvbjy"/>`,
		"fallback": "codicon:primitive-square",
	});
}

export default Component;
