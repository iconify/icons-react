import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gbqftdbeg.css';
import '../../css/u/ubw4zvora.css';
import '../../css/v/vlrj8tq8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gbqftdbeg"/><path class="ubw4zvora"/><path class="vlrj8tq8j"/></g>`,
		"fallback": "streamline-freehand-color:server-sftp-folder",
	});
}

export default Component;
