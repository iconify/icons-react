import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuua-_mlx.css';
import '../../css/w/w2u3wgntp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuua-_mlx"/><path class="w2u3wgntp"/>`,
		"fallback": "carbon:trash-can",
	});
}

export default Component;
