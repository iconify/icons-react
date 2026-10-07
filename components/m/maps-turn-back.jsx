import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sym69zbds.css';
import '../../css/c/cnf_zew0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sym69zbds"/><path class="cnf_zew0b"/></g>`,
		"fallback": "iconoir:maps-turn-back",
	});
}

export default Component;
