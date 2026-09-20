import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2-mc0hok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2-mc0hok"/>`,
		"fallback": "thesvg:notepadplusplus",
	});
}

export default Component;
