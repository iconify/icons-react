import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik-dwhbem.css';
import '../../css/b/bp5qez_qk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik-dwhbem"/><path class="bp5qez_qk"/>`,
		"fallback": "energy-icons:silo-20",
	});
}

export default Component;
