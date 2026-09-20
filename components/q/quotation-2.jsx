import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzek83gak.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzek83gak"/>`,
		"fallback": "streamline-plump:quotation-2",
	});
}

export default Component;
