import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/p/pbruvwbic.css';
import '../../css/h/h0rc5n0sv.css';
import '../../css/r/rcz8-cbpt.css';
import '../../css/e/e1eumrgmo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="pbruvwbic"/><path class="h0rc5n0sv"/><circle class="rcz8-cbpt"/><path class="e1eumrgmo"/></g>`,
		"fallback": "icon-park:pic-one",
	});
}

export default Component;
