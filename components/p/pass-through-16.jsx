import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1t2h770l.css';
import '../../css/n/nbyo3qbsm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1t2h770l"/><path class="nbyo3qbsm"/>`,
		"fallback": "qlementine-icons:pass-through-16",
	});
}

export default Component;
