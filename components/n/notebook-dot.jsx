import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c48u0eb2f.css';
import '../../css/y/yhq7qhbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c48u0eb2f"/><path class="yhq7qhbfu"/></g>`,
		"fallback": "vadivam:notebook-dot",
	});
}

export default Component;
