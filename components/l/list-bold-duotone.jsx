import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvhx8gb9i.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/qigovot_c.css';
import '../../css/v/v-s_f4e2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qvhx8gb9i"/><g class="xtpeb-edw"><path class="qigovot_c"/><path class="v-s_f4e2d"/></g>`,
		"fallback": "solar:list-bold-duotone",
	});
}

export default Component;
