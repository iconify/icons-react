import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l6iiwrbvd.css';
import '../../css/e/ey55h2r2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l6iiwrbvd"/><path class="ey55h2r2t"/></g>`,
		"fallback": "proicons:svelte",
	});
}

export default Component;
