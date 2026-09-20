import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrf6z8bki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrf6z8bki"/>`,
		"fallback": "thesvg:tmux",
	});
}

export default Component;
