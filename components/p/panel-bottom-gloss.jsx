import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixtq4fzpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixtq4fzpl"/>`,
		"fallback": "withicons:panel-bottom-gloss",
	});
}

export default Component;
