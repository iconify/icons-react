import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu7f6s55p.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu7f6s55p"/>`,
		"fallback": "dinkie-icons:netease-music-small",
	});
}

export default Component;
