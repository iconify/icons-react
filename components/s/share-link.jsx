import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4qlajleu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4qlajleu"/>`,
		"fallback": "streamline-plump:share-link",
	});
}

export default Component;
