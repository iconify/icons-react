import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jzfnhqbvm.css';
import '../../css/b/b7ow5c9sc.css';
import '../../css/a/a80jsmv5h.css';
import '../../css/u/u39fewb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jzfnhqbvm"/><path class="b7ow5c9sc"/><path class="a80jsmv5h"/><path class="u39fewb1w"/></g>`,
		"fallback": "lucide-extended:swatch-book-duotone",
	});
}

export default Component;
