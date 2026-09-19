import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4kc8vb4f.css';
import '../../css/i/ii8qtwyrs.css';
import '../../css/o/on4fre1ek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4kc8vb4f"/><path class="ii8qtwyrs"/><circle class="on4fre1ek"/>`,
		"fallback": "eos-icons:software-outlined",
	});
}

export default Component;
