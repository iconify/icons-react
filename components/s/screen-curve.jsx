import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/appne6kbn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="appne6kbn"/>`,
		"fallback": "streamline-flex:screen-curve",
	});
}

export default Component;
