import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzuqjj_tm.css';
import '../../css/j/jn7afdxga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzuqjj_tm"/><path class="jn7afdxga"/>`,
		"fallback": "streamline-ultimate:presentation-audience-bold",
	});
}

export default Component;
