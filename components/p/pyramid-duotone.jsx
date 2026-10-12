import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wtuz2dbwi.css';
import '../../css/z/za5jdqbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wtuz2dbwi"/><path class="za5jdqbzv"/></g>`,
		"fallback": "lucide-extended:pyramid-duotone",
	});
}

export default Component;
