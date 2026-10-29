import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ibx4phblj.css';
import '../../css/r/rweeoebtw.css';
import '../../css/k/kx5befbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ibx4phblj"/><path class="rweeoebtw"/><path class="kx5befbjv"/></g>`,
		"fallback": "withicons:music-note-sketch",
	});
}

export default Component;
