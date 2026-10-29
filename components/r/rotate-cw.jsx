import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j896-2bez.css';
import '../../css/t/t066wzbea.css';
import '../../css/h/hrdjp705l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j896-2bez wm-k"/><path class="t066wzbea wm-a"/><path class="hrdjp705l wm-deco"/>`,
		"fallback": "withicons-bauhaus:rotate-cw",
	});
}

export default Component;
