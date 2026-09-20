import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6jc4kd1z.css';
import '../../css/b/bikjexb7g.css';
import '../../css/j/j_8h5jbef.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6jc4kd1z"/><path class="bikjexb7g"/><path class="j_8h5jbef"/>`,
		"fallback": "vaadin:margin",
	});
}

export default Component;
