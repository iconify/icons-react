import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nm70zpb1c.css';
import '../../css/a/ajtvmoh5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nm70zpb1c"/><path class="ajtvmoh5p"/></g>`,
		"fallback": "lucide-extended:list-music-duotone",
	});
}

export default Component;
