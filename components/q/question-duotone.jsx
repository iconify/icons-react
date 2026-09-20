import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xi5wq3t8b.css';
import '../../css/h/hqodx2bjc.css';
import '../../css/x/xehwz-biw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="xi5wq3t8b"/><circle class="hqodx2bjc"/><path class="xehwz-biw"/></g>`,
		"fallback": "lets-icons:question-duotone",
	});
}

export default Component;
