import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/etqo8mbsk.css';
import '../../css/b/b85ermbzw.css';
import '../../css/q/q0guxfcfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="etqo8mbsk"/><path class="b85ermbzw"/><path class="q0guxfcfg"/></g>`,
		"fallback": "lucide-extended:towel-rack-duotone",
	});
}

export default Component;
