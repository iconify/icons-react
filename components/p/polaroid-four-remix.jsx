import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr0t-cb-w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pr0t-cb-w"/>`,
		"fallback": "streamline-flex:polaroid-four-remix",
	});
}

export default Component;
