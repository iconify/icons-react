import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fji14kbbh.css';
import '../../css/b/b144n1btn.css';
import '../../css/f/f_ksnwbtv.css';
import '../../css/p/pgw3asb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fji14kbbh wm-a"/><path class="b144n1btn wm-k"/><path class="f_ksnwbtv wm-k"/><path class="pgw3asb-i wm-k"/>`,
		"fallback": "withicons-bauhaus:package-open",
	});
}

export default Component;
