import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r73-a_4of.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r73-a_4of"/>`,
		"fallback": "stash:pack-solid",
	});
}

export default Component;
