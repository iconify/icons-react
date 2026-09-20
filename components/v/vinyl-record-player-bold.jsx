import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiq_k3ghp.css';
import '../../css/p/psisj8b5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiq_k3ghp"/><path class="psisj8b5n"/>`,
		"fallback": "streamline-ultimate:vinyl-record-player-bold",
	});
}

export default Component;
