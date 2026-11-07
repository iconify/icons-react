import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6gx6-b_c.css';
import '../../css/p/peilol5hf.css';
import '../../css/y/yus7ucc0b.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/o-a_llbzv.css';
import '../../css/u/uwjdfvbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6gx6-b_c"/><path clip-rule="evenodd" class="peilol5hf"/><path class="yus7ucc0b"/><g class="xtpeb-edw"><path class="o-a_llbzv"/><path class="uwjdfvbwa"/></g>`,
		"fallback": "solar:treadmill-bold-duotone",
	});
}

export default Component;
