import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/h/hue8_ac7h.css';
import '../../css/d/d2d5prbig.css';
import '../../css/n/nrndtsbfd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="hue8_ac7h"/><path class="d2d5prbig"/><path class="nrndtsbfd"/></g>`,
		"fallback": "icon-park:tips-one",
	});
}

export default Component;
