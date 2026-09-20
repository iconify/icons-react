import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/z/zg9mj5bvu.css';
import '../../css/l/lxc48fbno.css';
import '../../css/b/brca0-h_r.css';
import '../../css/x/xs8w2qkuj.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="zg9mj5bvu"/><circle class="lxc48fbno"/><path class="brca0-h_r"/><circle class="xs8w2qkuj"/></g>`,
		"fallback": "system-uicons:sliders",
	});
}

export default Component;
