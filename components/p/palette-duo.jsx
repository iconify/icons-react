import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vev2zbc2e.css';
import '../../css/r/r-tfq900y.css';
import '../../css/o/or693yu9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vev2zbc2e"/><path class="r-tfq900y wm-a"/><path class="or693yu9a"/></g>`,
		"fallback": "withicons:palette-duo",
	});
}

export default Component;
