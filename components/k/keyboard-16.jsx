import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdzjk4bvt.css';
import '../../css/o/osqzglbdy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdzjk4bvt"/><path clip-rule="evenodd" class="osqzglbdy"/>`,
		"fallback": "qlementine-icons:keyboard-16",
	});
}

export default Component;
