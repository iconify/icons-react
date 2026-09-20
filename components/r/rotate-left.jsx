import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivrto5utr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivrto5utr"/>`,
		"fallback": "streamline-plump:rotate-left",
	});
}

export default Component;
