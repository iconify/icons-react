import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n7xidaciy.css';
import '../../css/r/rdd_owjsi.css';
import '../../css/b/brhlumr9l.css';
import '../../css/s/skpptgbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="n7xidaciy wm-k"/><path class="rdd_owjsi"/><path class="brhlumr9l"/><path class="skpptgbbf wm-s"/></g>`,
		"fallback": "withicons-bauhaus:package-check",
	});
}

export default Component;
