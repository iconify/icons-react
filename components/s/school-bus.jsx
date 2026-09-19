import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q5bvs4b8s.css';
import '../../css/x/xejwnnbvm.css';
import '../../css/i/iqjbqp6jg.css';
import '../../css/d/d74nj3bga.css';
import '../../css/q/qahz-0dvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q5bvs4b8s"/><path class="xejwnnbvm"/><path class="iqjbqp6jg"/><path class="d74nj3bga"/><path class="qahz-0dvm"/></g>`,
		"fallback": "hugeicons:school-bus",
	});
}

export default Component;
