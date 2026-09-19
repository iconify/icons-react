import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty3ki5bkc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty3ki5bkc"/>`,
		"fallback": "game-icons:medicine-pills",
	});
}

export default Component;
