import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n87-3khpw.css';
import '../../css/g/gnk6mh7mj.css';
import '../../css/z/ze2n7pbji.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n87-3khpw"/><path class="gnk6mh7mj"/><path class="ze2n7pbji"/></g>`,
		"fallback": "streamline-flex-color:party-popper",
	});
}

export default Component;
