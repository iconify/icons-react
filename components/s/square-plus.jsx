import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbfnt-e3l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vbfnt-e3l"/>`,
		"fallback": "gravity-ui:square-plus",
	});
}

export default Component;
