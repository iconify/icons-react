import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r18z6yb6d.css';
import '../../css/z/zuv35owmt.css';
import '../../css/p/pndcq9b5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r18z6yb6d"/><path class="zuv35owmt"/><path class="pndcq9b5c"/></g>`,
		"fallback": "keyline-icons:panel-left-open-dashed-fill",
	});
}

export default Component;
