import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n2o5n6b0f.css';
import '../../css/v/viu-2m8dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n2o5n6b0f"/><path class="viu-2m8dq"/></g>`,
		"fallback": "keyline-icons:toggle-on",
	});
}

export default Component;
