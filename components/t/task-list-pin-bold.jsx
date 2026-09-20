import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs1lgy2sf.css';
import '../../css/f/ft-qacc5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs1lgy2sf"/><path class="ft-qacc5n"/>`,
		"fallback": "streamline-ultimate:task-list-pin-bold",
	});
}

export default Component;
