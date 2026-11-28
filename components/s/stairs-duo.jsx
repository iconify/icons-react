import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9dszyztl.css';
import '../../css/b/bxx_4tbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9dszyztl secondary"/><path class="bxx_4tbiq primary"/>`,
		"fallback": "iconaut:stairs-duo",
	});
}

export default Component;
