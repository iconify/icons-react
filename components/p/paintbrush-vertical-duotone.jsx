import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uo6zw876u.css';
import '../../css/f/fzy50vbde.css';
import '../../css/r/rh3ihcc6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uo6zw876u"/><path class="fzy50vbde"/><path class="rh3ihcc6r"/></g>`,
		"fallback": "lucide-extended:paintbrush-vertical-duotone",
	});
}

export default Component;
