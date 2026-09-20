import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ls_v-kbfe.css';
import '../../css/c/cz46b-bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ls_v-kbfe"/><rect class="cz46b-bku"/></g>`,
		"fallback": "lucide:tickets-plane",
	});
}

export default Component;
