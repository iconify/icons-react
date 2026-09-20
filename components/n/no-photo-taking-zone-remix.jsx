import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3aa9eb_w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t3aa9eb_w"/>`,
		"fallback": "streamline-plump:no-photo-taking-zone-remix",
	});
}

export default Component;
