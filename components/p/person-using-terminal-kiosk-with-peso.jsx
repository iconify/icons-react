import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgm5oubbw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgm5oubbw"/>`,
		"fallback": "pinhead:person-using-terminal-kiosk-with-peso",
	});
}

export default Component;
