import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bph7wduct.css';
import '../../css/a/a2u7q4nxu.css';
import '../../css/v/vjnt0fbaj.css';
import '../../css/m/m52v0xb7c.css';
import '../../css/z/z3-4c0wrc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bph7wduct"/><path class="a2u7q4nxu"/><path class="vjnt0fbaj"/><path class="m52v0xb7c"/><path class="z3-4c0wrc"/>`,
		"fallback": "selfhst:relaticle-dark",
	});
}

export default Component;
