import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed9omlb7w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ed9omlb7w"/>`,
		"fallback": "streamline-flex:story-post-remix",
	});
}

export default Component;
