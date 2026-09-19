import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or4ad2bkw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or4ad2bkw"/>`,
		"fallback": "game-icons:machete",
	});
}

export default Component;
