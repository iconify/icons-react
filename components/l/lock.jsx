import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hmb0o_-2y.css';
import '../../css/b/b86buo32x.css';
import '../../css/k/ki55z6ilg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hmb0o_-2y wm-a"/><path class="b86buo32x"/><path class="ki55z6ilg wm-a"/></g>`,
		"fallback": "withicons:lock",
	});
}

export default Component;
