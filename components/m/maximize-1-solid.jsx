import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrr8z5b2v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lrr8z5b2v"/>`,
		"fallback": "streamline-plump:maximize-1-solid",
	});
}

export default Component;
