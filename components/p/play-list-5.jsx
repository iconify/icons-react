import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ni793ccca.css';
import '../../css/g/guwubbb0i.css';
import '../../css/u/u13jj0bme.css';
import '../../css/a/acb48hb4h.css';
import '../../css/n/nsdsf4nsf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ni793ccca"/><path clip-rule="evenodd" class="guwubbb0i"/><path class="u13jj0bme"/><path class="acb48hb4h"/><path class="nsdsf4nsf"/></g>`,
		"fallback": "streamline-color:play-list-5",
	});
}

export default Component;
