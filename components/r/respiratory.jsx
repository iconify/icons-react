import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grjwqbcjo.css';
import '../../css/t/tbbjvyiok.css';
import '../../css/u/ux3ufdb1r.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grjwqbcjo"/><path class="tbbjvyiok"/><path class="ux3ufdb1r"/>`,
		"fallback": "medical-icon:respiratory",
	});
}

export default Component;
