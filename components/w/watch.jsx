import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/of5d_kfxw.css';
import '../../css/e/eg-4hjbbz.css';
import '../../css/f/fk3p7xb2s.css';
import '../../css/e/ejjn8hi1g.css';
import '../../css/s/sk4_slj0s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="of5d_kfxw"/><path class="eg-4hjbbz"/><path class="fk3p7xb2s"/><path class="ejjn8hi1g"/><path class="sk4_slj0s"/></g>`,
		"fallback": "pepicons:watch",
	});
}

export default Component;
