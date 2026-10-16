import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf_iwi87h.css';
import '../../css/v/vc8qn24vt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf_iwi87h"/><path class="vc8qn24vt"/>`,
		"fallback": "energy-icons:motor-symbol-48-bold",
	});
}

export default Component;
