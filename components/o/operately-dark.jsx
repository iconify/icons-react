import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw8tm-bwd.css';
import '../../css/u/u-8cambew.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw8tm-bwd"/><path class="u-8cambew"/>`,
		"fallback": "selfhst:operately-dark",
	});
}

export default Component;
