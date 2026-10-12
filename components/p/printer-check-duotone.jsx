import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qv-63pbce.css';
import '../../css/y/y-oiv4box.css';
import '../../css/h/hnbud8kdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qv-63pbce"/><path class="y-oiv4box"/><path class="hnbud8kdw"/></g>`,
		"fallback": "lucide-extended:printer-check-duotone",
	});
}

export default Component;
