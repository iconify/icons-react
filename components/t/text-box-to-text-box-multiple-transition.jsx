import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/c/cklvww.css';
import '../../css/z/znzwrv.css';
import '../../css/d/d-3gok0n.css';
import '../../css/d/d-5rxztz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c cklvww"/><path class="a0m25c znzwrv"/>`,
		"fallback": "line-md:text-box-to-text-box-multiple-transition",
	});
}

export default Component;
