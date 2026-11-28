import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a4fvsub_h.css';
import '../../css/k/keop23btv.css';
import '../../css/a/arz8oxjao.css';
import '../../css/t/tuxs9rrbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a4fvsub_h"/><path class="keop23btv"/><path class="arz8oxjao"/><path class="tuxs9rrbn"/></g>`,
		"fallback": "iconaut:maximize-duo",
	});
}

export default Component;
