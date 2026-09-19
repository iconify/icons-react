import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyewppspe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyewppspe"/>`,
		"fallback": "game-icons:queen-crown",
	});
}

export default Component;
