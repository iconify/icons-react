import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo5b263yr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vo5b263yr"/>`,
		"fallback": "streamline-plump:triangle-arrow-expand-remix",
	});
}

export default Component;
