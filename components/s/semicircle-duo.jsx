import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phkdd0b6a.css';
import '../../css/d/d0bxfnb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phkdd0b6a secondary"/><path class="d0bxfnb3f primary"/>`,
		"fallback": "iconaut:semicircle-duo",
	});
}

export default Component;
