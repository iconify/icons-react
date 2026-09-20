import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lavlmcboo.css';
import '../../css/h/hcg-04b2r.css';
import '../../css/u/uha626p8s.css';
import '../../css/z/zhsmirjnu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lavlmcboo"/><path class="hcg-04b2r"/><path class="uha626p8s"/><path class="zhsmirjnu"/></g>`,
		"fallback": "streamline-kameleon-color:power-duo",
	});
}

export default Component;
