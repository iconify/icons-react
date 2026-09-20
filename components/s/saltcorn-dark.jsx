import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrlw-04kw.css';
import '../../css/l/l3azjz_az.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrlw-04kw"/><path class="l3azjz_az"/>`,
		"fallback": "selfhst:saltcorn-dark",
	});
}

export default Component;
