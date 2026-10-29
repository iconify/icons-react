import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fevjc7byl.css';
import '../../css/b/b34-l4b9r.css';
import '../../css/m/mlc47qbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fevjc7byl"/><path class="b34-l4b9r"/><path class="mlc47qbfp"/></g>`,
		"fallback": "withicons-bauhaus:person-standing",
	});
}

export default Component;
