import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mljob0-zg.css';
import '../../css/f/fs2axpb2l.css';
import '../../css/s/sq5vlkbrq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="mljob0-zg"/><path class="fs2axpb2l"/><circle class="sq5vlkbrq"/>`,
		"fallback": "famicons:pin-outline",
	});
}

export default Component;
