import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgrym7bkg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgrym7bkg"/>`,
		"fallback": "game-icons:prayer-beads",
	});
}

export default Component;
