import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbcc_bcyr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbcc_bcyr"/>`,
		"fallback": "game-icons:snowflake-2",
	});
}

export default Component;
