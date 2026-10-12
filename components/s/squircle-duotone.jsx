import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxgt1osjy.css';
import '../../css/g/gsvi9fkuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxgt1osjy"/><path class="gsvi9fkuj"/></g>`,
		"fallback": "lucide-extended:squircle-duotone",
	});
}

export default Component;
