import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ophjgibpm.css';
import '../../css/n/nb382m2ib.css';
import '../../css/p/phawmubhy.css';
import '../../css/k/k0tm63b0s.css';
import '../../css/v/vvmccbmmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ophjgibpm"/><path class="nb382m2ib"/><path class="phawmubhy wm-a"/><path class="k0tm63b0s"/><path class="vvmccbmmh"/></g>`,
		"fallback": "withicons:paintbrush-duo",
	});
}

export default Component;
