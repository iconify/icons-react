import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/f_362pbxn.css';
import '../../css/n/n1xy6nh9u.css';
import '../../css/j/jh-5preow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="f_362pbxn"/><circle class="n1xy6nh9u"/><path class="jh-5preow"/></g>`,
		"fallback": "lets-icons:target-light",
	});
}

export default Component;
