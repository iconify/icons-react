import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n-ty_nfaq.css';
import '../../css/v/vtsq0i4-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n-ty_nfaq"/><path class="vtsq0i4-u"/></g>`,
		"fallback": "lucide-extended:mouse-left-duotone",
	});
}

export default Component;
