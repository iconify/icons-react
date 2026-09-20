import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fup7tzn3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fup7tzn3z"/>`,
		"fallback": "tdesign:user-talk-1-filled",
	});
}

export default Component;
