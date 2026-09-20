import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gki0-s6ai.css';
import '../../css/y/y5mrveslg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gki0-s6ai"/><circle class="y5mrveslg"/></g>`,
		"fallback": "meteor-icons:music-note",
	});
}

export default Component;
