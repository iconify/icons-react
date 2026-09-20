import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jid4_bb7y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jid4_bb7y"/>`,
		"fallback": "streamline-flex:warning-diamond",
	});
}

export default Component;
