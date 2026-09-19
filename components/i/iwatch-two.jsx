import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nax6yxb_c.css';
import '../../css/h/hmg8rcceu.css';
import '../../css/v/v98sb2usu.css';
import '../../css/b/bomlk53dk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nax6yxb_c"/><rect class="hmg8rcceu"/><rect transform="rotate(90 13 18)" class="v98sb2usu"/><rect transform="rotate(90 13 25)" class="bomlk53dk"/></g>`,
		"fallback": "icon-park:iwatch-two",
	});
}

export default Component;
