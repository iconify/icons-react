import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kylfzebuf.css';
import '../../css/i/impgh8bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kylfzebuf"/><path class="impgh8bbk"/>`,
		"fallback": "stash:pack-light",
	});
}

export default Component;
