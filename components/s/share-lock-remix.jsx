import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7qa-kb9p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c7qa-kb9p"/>`,
		"fallback": "streamline-plump:share-lock-remix",
	});
}

export default Component;
