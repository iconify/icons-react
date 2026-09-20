import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axw7n_bsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axw7n_bsr"/>`,
		"fallback": "meteor-icons:table-plus",
	});
}

export default Component;
