import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-ego69_b.css';
import '../../css/r/rz02wcb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer f-ego69_b"/><path class="duoicon-primary-layer rz02wcb5x"/>`,
		"fallback": "duo-icons:marker",
	});
}

export default Component;
