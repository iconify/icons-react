import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnp81lbbc.css';
import '../../css/o/odno2sboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mnp81lbbc"/><path class="odno2sboo"/>`,
		"fallback": "qlementine-icons:sort-alpha-asc-24",
	});
}

export default Component;
