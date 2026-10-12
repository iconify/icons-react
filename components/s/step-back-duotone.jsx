import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1ewd6o7u.css';
import '../../css/z/za_8z_t8j.css';
import '../../css/h/h7gz2uwiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r1ewd6o7u"/><path class="za_8z_t8j"/><path class="h7gz2uwiq"/></g>`,
		"fallback": "lucide-extended:step-back-duotone",
	});
}

export default Component;
