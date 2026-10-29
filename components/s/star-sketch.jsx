import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xs4al_e6r.css';
import '../../css/v/vj3558bmh.css';
import '../../css/j/jdwknqbob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xs4al_e6r"/><path class="vj3558bmh"/><path class="jdwknqbob"/></g>`,
		"fallback": "withicons:star-sketch",
	});
}

export default Component;
