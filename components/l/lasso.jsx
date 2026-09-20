import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/ms4rb77jb.css';
import '../../css/f/f2ny9eb9g.css';
import '../../css/c/c00zy4e0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ms4rb77jb"/><path class="f2ny9eb9g"/><path class="c00zy4e0t"/></g>`,
		"fallback": "tabler:lasso",
	});
}

export default Component;
