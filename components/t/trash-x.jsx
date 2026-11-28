import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/na4rgbmvw.css';
import '../../css/m/mqt8g0b7o.css';
import '../../css/f/f9guiachc.css';
import '../../css/v/vigzmyb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="na4rgbmvw"/><path class="mqt8g0b7o"/><path class="f9guiachc"/><path class="vigzmyb7f"/></g>`,
		"fallback": "iconaut:trash-x",
	});
}

export default Component;
