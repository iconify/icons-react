import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ly7qoj00u.css';
import '../../css/z/z6cin8b0o.css';
import '../../css/f/fdp43wbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ly7qoj00u"/><path class="z6cin8b0o"/><path class="fdp43wbff"/></g>`,
		"fallback": "lucide-extended:plant-pot-duotone",
	});
}

export default Component;
