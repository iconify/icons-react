import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s57kuzu5k.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s57kuzu5k"/>`,
		"fallback": "tdesign:mode-light-filled",
	});
}

export default Component;
