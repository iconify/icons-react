import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jswg7kbdr.css';
import '../../css/f/fecjq6g5y.css';
import '../../css/x/xex-xd4wj.css';
import '../../css/i/idjw04bqv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="jswg7kbdr"/><path class="fecjq6g5y"/><path class="xex-xd4wj"/><path class="idjw04bqv"/></g>`,
		"fallback": "icon-park-outline:wallet",
	});
}

export default Component;
