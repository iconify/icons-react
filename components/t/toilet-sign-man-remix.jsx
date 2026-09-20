import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h27qblb0q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h27qblb0q"/>`,
		"fallback": "streamline-flex:toilet-sign-man-remix",
	});
}

export default Component;
