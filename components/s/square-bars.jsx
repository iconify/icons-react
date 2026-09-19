import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8crd06px.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n8crd06px"/>`,
		"fallback": "gravity-ui:square-bars",
	});
}

export default Component;
