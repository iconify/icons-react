import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ui19h9b5s.css';
import '../../css/h/hpplanbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="ui19h9b5s"/><path class="hpplanbmc"/></g>`,
		"fallback": "keyline-icons:user-voice-fill",
	});
}

export default Component;
