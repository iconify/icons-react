import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-90k78cl.css';
import '../../css/b/b72brhbir.css';
import '../../css/n/n2wg6g7jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m-90k78cl"/><path class="b72brhbir"/><path class="n2wg6g7jo"/></g>`,
		"fallback": "lucide-extended:table-properties-duotone",
	});
}

export default Component;
