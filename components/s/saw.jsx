import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o5thz8_fw.css';
import '../../css/r/rgkol73db.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o5thz8_fw"/><path class="rgkol73db"/></g>`,
		"fallback": "iconaut:saw",
	});
}

export default Component;
