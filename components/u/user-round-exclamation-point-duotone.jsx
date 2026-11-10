import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zlcvyh7fb.css';
import '../../css/t/ty-zitbel.css';
import '../../css/i/ig-kolbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zlcvyh7fb"/><path class="ty-zitbel"/><path class="ig-kolbmk"/></g>`,
		"fallback": "lucide-extended:user-round-exclamation-point-duotone",
	});
}

export default Component;
