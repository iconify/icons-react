import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts8pgfrda.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ts8pgfrda"/>`,
		"fallback": "streamline-plump:wave-signal-square-remix",
	});
}

export default Component;
