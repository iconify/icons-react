import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gz47tp26q.css';
import '../../css/e/e31w36bfn.css';
import '../../css/q/q98kknj2b.css';
import '../../css/z/zfvqimbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gz47tp26q wm-shadow"/><path class="e31w36bfn wm-shadow"/><path class="q98kknj2b"/><path class="zfvqimbik"/></g>`,
		"fallback": "withicons-brutal:rectangle-ellipsis",
	});
}

export default Component;
