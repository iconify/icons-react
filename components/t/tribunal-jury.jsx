import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nby1hwv0g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nby1hwv0g"/>`,
		"fallback": "game-icons:tribunal-jury",
	});
}

export default Component;
