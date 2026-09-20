import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oz-gyro2d.css';
import '../../css/p/p38gk2f1t.css';
import '../../css/n/nggb0jped.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oz-gyro2d"/><rect class="p38gk2f1t"/><path class="nggb0jped"/></g>`,
		"fallback": "streamline:interface-file-clipboard-check-checkmark-edit-task-edition-checklist-check-success-clipboard-form",
	});
}

export default Component;
