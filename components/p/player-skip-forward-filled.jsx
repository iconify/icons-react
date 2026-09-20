import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syjqo3h7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syjqo3h7k"/>`,
		"fallback": "tabler:player-skip-forward-filled",
	});
}

export default Component;
