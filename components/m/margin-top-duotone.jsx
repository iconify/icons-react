import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ft9nhnbbu.css';
import '../../css/p/ph1021bnv.css';
import '../../css/u/ujd49vb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ft9nhnbbu"/><path class="ph1021bnv"/><path class="ujd49vb9f"/></g>`,
		"fallback": "lucide-extended:margin-top-duotone",
	});
}

export default Component;
