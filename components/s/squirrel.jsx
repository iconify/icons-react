import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oussonb2w.css';
import '../../css/y/y9j2vm0de.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oussonb2w"/><path clip-rule="evenodd" class="y9j2vm0de"/></g>`,
		"fallback": "codicon:squirrel",
	});
}

export default Component;
