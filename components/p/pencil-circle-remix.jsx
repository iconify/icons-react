import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do32_5buq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="do32_5buq"/>`,
		"fallback": "streamline-plump:pencil-circle-remix",
	});
}

export default Component;
