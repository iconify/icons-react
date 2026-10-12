import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eb2w3gb6y.css';
import '../../css/l/l7ocqgb5a.css';
import '../../css/b/bmlydqbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eb2w3gb6y"/><path class="l7ocqgb5a"/><path class="bmlydqbmd"/></g>`,
		"fallback": "lucide-extended:package-x-duotone",
	});
}

export default Component;
