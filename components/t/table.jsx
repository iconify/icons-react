import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q8i6dbbuh.css';
import '../../css/b/bdjqbm-ub.css';
import '../../css/c/caum75byk.css';
import '../../css/g/g07d2nb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="q8i6dbbuh wm-shadow"/><path class="bdjqbm-ub wm-shadow"/><path class="caum75byk"/><path class="g07d2nb5y"/></g>`,
		"fallback": "withicons-brutal:table",
	});
}

export default Component;
