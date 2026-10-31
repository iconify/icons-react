import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uhve_kb3h.css';
import '../../css/b/b18ioelvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uhve_kb3h"/><path class="b18ioelvz"/></g>`,
		"fallback": "coolicons:playing-cards-duocolor-round",
	});
}

export default Component;
