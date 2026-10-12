import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9v3tvbiy.css';
import '../../css/o/owd--tbds.css';
import '../../css/h/hbedzngty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k9v3tvbiy"/><path class="owd--tbds"/><path class="hbedzngty"/></g>`,
		"fallback": "lucide-extended:plug-duotone",
	});
}

export default Component;
