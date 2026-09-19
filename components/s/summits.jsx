import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfldv9gmq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfldv9gmq"/>`,
		"fallback": "game-icons:summits",
	});
}

export default Component;
