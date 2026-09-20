import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr9kh0b-a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kr9kh0b-a"/>`,
		"fallback": "streamline-plump:suitcase-rolling-remix",
	});
}

export default Component;
