import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p8hy2qb_s.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/d/d6cagkb6k.css';
import '../../css/q/qx33z3jup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p8hy2qb_s"/><circle class="h_tsn8bxt"/><path class="d6cagkb6k"/><path class="qx33z3jup"/></g>`,
		"fallback": "lucide-lab:target-arrow",
	});
}

export default Component;
