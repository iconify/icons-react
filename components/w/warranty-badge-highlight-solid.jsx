import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp06x116o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xp06x116o"/>`,
		"fallback": "streamline-flex:warranty-badge-highlight-solid",
	});
}

export default Component;
