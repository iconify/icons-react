import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbsbh4bwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nbsbh4bwl"/>`,
		"fallback": "streamline-plump:moon-stars-solid",
	});
}

export default Component;
