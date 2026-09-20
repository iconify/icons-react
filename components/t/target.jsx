import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/a/agd2mgb0r.css';
import '../../css/i/i-6ka3ruo.css';
import '../../css/w/woosq8bsw.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><circle class="agd2mgb0r"/><circle class="i-6ka3ruo"/><circle class="woosq8bsw"/></g>`,
		"fallback": "system-uicons:target",
	});
}

export default Component;
