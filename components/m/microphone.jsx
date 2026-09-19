import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/acxaut9dg.css';
import '../../css/n/nwplrgbog.css';
import '../../css/a/ab9b2_byt.css';
import '../../css/v/vz7twc1ep.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="acxaut9dg"/><path class="nwplrgbog"/><path class="ab9b2_byt"/><path class="vz7twc1ep"/></g>`,
		"fallback": "icon-park-outline:microphone",
	});
}

export default Component;
