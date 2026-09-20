import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/u25e0akyp.css';
import '../../css/m/m72_wqvcv.css';
import '../../css/y/ynebryeaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="u25e0akyp"/><path class="m72_wqvcv"/><path class="ynebryeaz"/></g>`,
		"fallback": "streamline-plump-color:music-note-trebble-clef",
	});
}

export default Component;
