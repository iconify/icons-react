import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/or693yu9a.css';
import '../../css/r/r-tfq900y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="or693yu9a"/><path class="r-tfq900y wm-a"/></g>`,
		"fallback": "withicons:palette",
	});
}

export default Component;
