import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r2fk4xb9m.css';
import '../../css/u/umnetetzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r2fk4xb9m"/><path class="umnetetzo"/></g>`,
		"fallback": "keyline-icons:podium-fill",
	});
}

export default Component;
