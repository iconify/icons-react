import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4mo4nolz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f4mo4nolz"/>`,
		"fallback": "streamline-plump:share-link-remix",
	});
}

export default Component;
