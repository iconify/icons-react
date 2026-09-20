import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqn0bub3s.css';
import '../../css/l/l44l4kkdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqn0bub3s"/><path clip-rule="evenodd" class="l44l4kkdh"/>`,
		"fallback": "lets-icons:storm-fill",
	});
}

export default Component;
