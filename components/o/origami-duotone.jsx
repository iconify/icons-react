import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spc8l1bte.css';
import '../../css/j/j4y0ffqca.css';
import '../../css/f/fg6r96b-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="spc8l1bte"/><path class="j4y0ffqca"/><path class="fg6r96b-l"/></g>`,
		"fallback": "lucide-extended:origami-duotone",
	});
}

export default Component;
