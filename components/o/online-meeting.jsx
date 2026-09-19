import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/h/hue8_ac7h.css';
import '../../css/t/t6hpowrjp.css';
import '../../css/t/tigqmpb-w.css';
import '../../css/d/domo4ufmk.css';
import '../../css/y/y0nlbtb9s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="hue8_ac7h"/><path class="t6hpowrjp"/><path class="tigqmpb-w"/><path class="domo4ufmk"/><path class="y0nlbtb9s"/></g>`,
		"fallback": "icon-park:online-meeting",
	});
}

export default Component;
