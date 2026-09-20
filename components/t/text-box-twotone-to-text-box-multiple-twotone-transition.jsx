import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/econho.css';
import '../../css/i/iw1iew.css';
import '../../css/b/b92-iz.css';
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
		"content": `<path class="econho iw1iew"/><path class="b92-iz iw1iew"/>`,
		"fallback": "line-md:text-box-twotone-to-text-box-multiple-twotone-transition",
	});
}

export default Component;
