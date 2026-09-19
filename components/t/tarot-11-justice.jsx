import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zia8pjbtx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zia8pjbtx"/>`,
		"fallback": "game-icons:tarot-11-justice",
	});
}

export default Component;
