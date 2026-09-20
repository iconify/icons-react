import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e2bqlemma.css';
import '../../css/i/iotpzu8ya.css';
import '../../css/y/yj3rmtyru.css';
import '../../css/f/f1sputb4r.css';
import '../../css/p/pjaqvf5bu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e2bqlemma"/><path class="iotpzu8ya"/><path class="yj3rmtyru"/><path class="f1sputb4r"/><path class="pjaqvf5bu"/></g>`,
		"fallback": "streamline-color:sprout",
	});
}

export default Component;
