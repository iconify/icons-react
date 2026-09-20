import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea9o-cb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea9o-cb6f"/>`,
		"fallback": "thesvg:novu",
	});
}

export default Component;
