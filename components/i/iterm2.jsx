import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tih5mtbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tih5mtbzt"/>`,
		"fallback": "thesvg-color:iterm2",
	});
}

export default Component;
