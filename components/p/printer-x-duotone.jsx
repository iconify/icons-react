import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imhm0cmas.css';
import '../../css/v/v0rsyqbxa.css';
import '../../css/h/hnbud8kdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="imhm0cmas"/><path class="v0rsyqbxa"/><path class="hnbud8kdw"/></g>`,
		"fallback": "lucide-extended:printer-x-duotone",
	});
}

export default Component;
