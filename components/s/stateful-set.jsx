import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyyeipb0v.css';
import '../../css/m/m8caoebdb.css';
import '../../css/c/cl10rdbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyyeipb0v"/><path class="m8caoebdb"/><path class="cl10rdbxe"/>`,
		"fallback": "eos-icons:stateful-set",
	});
}

export default Component;
