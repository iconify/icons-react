import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/josfqgbys.css';
import '../../css/k/kdmg_nq5y.css';
import '../../css/z/z6z3bobke.css';
import '../../css/u/uy3qgrkke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="josfqgbys"/><path class="kdmg_nq5y"/><path class="z6z3bobke"/><path class="uy3qgrkke"/>`,
		"fallback": "token:swth",
	});
}

export default Component;
