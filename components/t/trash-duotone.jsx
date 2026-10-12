import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eff4cabla.css';
import '../../css/g/gg3es5x5l.css';
import '../../css/i/i5b16xb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eff4cabla"/><path class="gg3es5x5l"/><path class="i5b16xb_a"/></g>`,
		"fallback": "lucide-extended:trash-duotone",
	});
}

export default Component;
