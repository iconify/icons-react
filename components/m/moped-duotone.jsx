import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f816b1b0s.css';
import '../../css/b/bx3gdo1xl.css';
import '../../css/m/mwc3c6b8l.css';
import '../../css/z/z7wjptbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f816b1b0s"/><path class="bx3gdo1xl"/><path class="mwc3c6b8l"/><path class="z7wjptbfd"/></g>`,
		"fallback": "lucide-extended:moped-duotone",
	});
}

export default Component;
