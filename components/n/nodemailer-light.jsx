import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvhe4dbhm.css';
import '../../css/x/x0ej-4b7d.css';
import '../../css/j/j_dfhbbfa.css';
import '../../css/f/f8jb57zbv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvhe4dbhm"/><path class="x0ej-4b7d"/><path class="j_dfhbbfa"/><path class="f8jb57zbv"/>`,
		"fallback": "selfhst:nodemailer-light",
	});
}

export default Component;
