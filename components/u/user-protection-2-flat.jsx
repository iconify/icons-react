import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tk7wfdcta.css';
import '../../css/e/ett3bsb0f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tk7wfdcta"/><path clip-rule="evenodd" class="ett3bsb0f"/></g>`,
		"fallback": "streamline-color:user-protection-2-flat",
	});
}

export default Component;
