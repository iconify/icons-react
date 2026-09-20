import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtdsctbtj.css';
import '../../css/w/w6qwevbda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtdsctbtj"/><path class="w6qwevbda"/>`,
		"fallback": "tdesign:search-error-filled",
	});
}

export default Component;
