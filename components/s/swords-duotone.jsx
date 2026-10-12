import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sk8gu0r-j.css';
import '../../css/u/udkitmi0k.css';
import '../../css/d/db1mamb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sk8gu0r-j"/><path class="udkitmi0k"/><path class="db1mamb7x"/></g>`,
		"fallback": "lucide-extended:swords-duotone",
	});
}

export default Component;
