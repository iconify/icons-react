import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkb1vr54i.css';
import '../../css/h/h88dnnzlp.css';
import '../../css/x/xa703b19s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tkb1vr54i"/><path class="h88dnnzlp"/><path class="xa703b19s"/></g>`,
		"fallback": "lucide-extended:screw-duotone",
	});
}

export default Component;
