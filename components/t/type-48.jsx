import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_yfmnbkd.css';
import '../../css/y/ya6awqbqs.css';
import '../../css/z/zu-vrnrjs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_yfmnbkd"/><path class="ya6awqbqs"/><path class="zu-vrnrjs"/>`,
		"fallback": "energy-icons:type-48",
	});
}

export default Component;
