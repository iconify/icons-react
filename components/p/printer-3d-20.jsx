import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj62wxb8v.css';
import '../../css/x/xt396oxux.css';
import '../../css/d/dla8t97vb.css';
import '../../css/p/pfp6q0bhe.css';
import '../../css/d/d6miye_io.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj62wxb8v"/><path class="xt396oxux"/><path class="dla8t97vb"/><path class="pfp6q0bhe"/><path class="d6miye_io"/>`,
		"fallback": "energy-icons:printer-3d-20",
	});
}

export default Component;
