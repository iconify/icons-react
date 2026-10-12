import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rvnj0gg6v.css';
import '../../css/j/js8mytioh.css';
import '../../css/t/t-7jnmeji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rvnj0gg6v"/><path class="js8mytioh"/><path class="t-7jnmeji"/></g>`,
		"fallback": "lucide-extended:layers-2-duotone",
	});
}

export default Component;
