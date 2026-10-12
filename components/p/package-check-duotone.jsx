import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jxyebobhy.css';
import '../../css/j/jjfrf9x3x.css';
import '../../css/b/bmlydqbmd.css';
import '../../css/l/l7ocqgb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jxyebobhy"/><path class="jjfrf9x3x"/><path class="bmlydqbmd"/><path class="l7ocqgb5a"/></g>`,
		"fallback": "lucide-extended:package-check-duotone",
	});
}

export default Component;
