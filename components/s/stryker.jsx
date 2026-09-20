import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcwz-8byp.css';
import '../../css/j/jz_z96ofw.css';
import '../../css/h/hx1pgx08q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wcwz-8byp"><path class="jz_z96ofw"/><path class="hx1pgx08q"/></g>`,
		"fallback": "material-icon-theme:stryker",
	});
}

export default Component;
