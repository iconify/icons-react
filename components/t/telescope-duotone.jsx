import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpnd9lbjp.css';
import '../../css/g/gqykg4buz.css';
import '../../css/w/w6vmw__do.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hpnd9lbjp"/><path class="gqykg4buz"/><path class="w6vmw__do"/></g>`,
		"fallback": "lucide-extended:telescope-duotone",
	});
}

export default Component;
