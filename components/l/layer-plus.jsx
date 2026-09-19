import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae07h2byp.css';
import '../../css/a/a_f7wt5fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae07h2byp"/><path class="a_f7wt5fj"/>`,
		"fallback": "bxs:layer-plus",
	});
}

export default Component;
