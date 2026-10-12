import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o8cx4wb3w.css';
import '../../css/a/ajbec7b6f.css';
import '../../css/n/nl6t94d5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o8cx4wb3w"/><path clip-rule="evenodd" class="ajbec7b6f"/><path class="nl6t94d5o"/></g>`,
		"fallback": "lucide-extended:map-pinned-duotone",
	});
}

export default Component;
