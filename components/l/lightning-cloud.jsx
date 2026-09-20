import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/uxboto48x.css';
import '../../css/m/meotuabpw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="uxboto48x"/><path class="meotuabpw"/></g>`,
		"fallback": "streamline-plump:lightning-cloud",
	});
}

export default Component;
