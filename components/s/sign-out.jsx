import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ec-6ksbaf.css';
import '../../css/a/a2ru96b7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ec-6ksbaf"/><path class="a2ru96b7g"/></g>`,
		"fallback": "struq:sign-out",
	});
}

export default Component;
