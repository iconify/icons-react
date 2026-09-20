import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eqlh5gr9l.css';
import '../../css/m/mfg4gqx2s.css';
import '../../css/e/ee0-i8bqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eqlh5gr9l"/><path class="mfg4gqx2s"/><path class="ee0-i8bqo"/></g>`,
		"fallback": "keyline-icons:list-music-duotone",
	});
}

export default Component;
