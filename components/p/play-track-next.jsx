import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grjom1bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grjom1bbs"/>`,
		"fallback": "gg:play-track-next",
	});
}

export default Component;
