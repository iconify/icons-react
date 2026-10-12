import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxewc1esa.css';
import '../../css/s/sf8jnqbzj.css';
import '../../css/q/q7vyh3bas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zxewc1esa"/><path class="sf8jnqbzj"/><path class="q7vyh3bas"/></g>`,
		"fallback": "lucide-extended:lamp-wall-down-duotone",
	});
}

export default Component;
