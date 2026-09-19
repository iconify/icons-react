import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssctzqt6w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssctzqt6w"/>`,
		"fallback": "game-icons:walking-boot",
	});
}

export default Component;
