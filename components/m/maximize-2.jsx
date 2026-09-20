import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yb6-zfvur.css';
import '../../css/d/db6sjz3eu.css';
import '../../css/w/wpifukexa.css';
import '../../css/h/h5rncijzu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yb6-zfvur"/><path class="db6sjz3eu"/><path class="wpifukexa"/><path class="h5rncijzu"/></g>`,
		"fallback": "streamline-flex-color:maximize-2",
	});
}

export default Component;
