import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ji6wpeexp.css';
import '../../css/f/fgnj-23zz.css';
import '../../css/h/htw155bzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ji6wpeexp"/><path class="fgnj-23zz"/><path class="htw155bzi"/></g>`,
		"fallback": "lucide-extended:stone-duotone",
	});
}

export default Component;
