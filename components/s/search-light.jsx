import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npb90acjk.css';
import '../../css/j/jy2_mcanx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npb90acjk"/><path class="jy2_mcanx"/>`,
		"fallback": "stash:search-light",
	});
}

export default Component;
