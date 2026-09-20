import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba8vi7b0t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ba8vi7b0t"/>`,
		"fallback": "streamline-plump:select-all-remix",
	});
}

export default Component;
