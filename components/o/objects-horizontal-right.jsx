import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_j4mhb6r.css';
import '../../css/n/nvxku1vtj.css';
import '../../css/e/eb9scq8yj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_j4mhb6r"/><rect class="nvxku1vtj"/><rect class="eb9scq8yj"/>`,
		"fallback": "bxs:objects-horizontal-right",
	});
}

export default Component;
