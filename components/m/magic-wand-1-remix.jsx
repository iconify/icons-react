import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrgc3zb_t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xrgc3zb_t"/>`,
		"fallback": "streamline-plump:magic-wand-1-remix",
	});
}

export default Component;
