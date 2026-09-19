import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivfkbdk6i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ivfkbdk6i"/>`,
		"fallback": "gravity-ui:terminal",
	});
}

export default Component;
