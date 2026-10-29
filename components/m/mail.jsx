import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxj_cdcom.css';
import '../../css/h/h1a9fqbsg.css';
import '../../css/o/ozm2d0b9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxj_cdcom wm-k"/><path class="h1a9fqbsg wm-k"/><path class="ozm2d0b9u wm-a"/>`,
		"fallback": "withicons-bauhaus:mail",
	});
}

export default Component;
