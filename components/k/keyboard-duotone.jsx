import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/weid9ihvv.css';
import '../../css/v/voyrhpbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="weid9ihvv"/><path class="voyrhpbrp"/></g>`,
		"fallback": "lucide-extended:keyboard-duotone",
	});
}

export default Component;
