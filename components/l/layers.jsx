import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t2csugm8t.css';
import '../../css/f/frd7wubks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t2csugm8t"/><path class="frd7wubks"/></g>`,
		"fallback": "tdesign:layers",
	});
}

export default Component;
