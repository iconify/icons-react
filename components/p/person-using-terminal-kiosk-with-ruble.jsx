import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urfhgnb6w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urfhgnb6w"/>`,
		"fallback": "pinhead:person-using-terminal-kiosk-with-ruble",
	});
}

export default Component;
