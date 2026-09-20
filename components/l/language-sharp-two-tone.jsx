import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jb9d8n0ki.css';
import '../../css/u/uk-urv4fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jb9d8n0ki"/><path class="uk-urv4fa"/></g>`,
		"fallback": "keyline-icons:language-sharp-two-tone",
	});
}

export default Component;
