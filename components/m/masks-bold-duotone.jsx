import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8e6oux4o.css';
import '../../css/j/jmtwhyb0w.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/q0c5uqbol.css';
import '../../css/t/tw06w4bkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z8e6oux4o"/><path class="jmtwhyb0w"/><g class="xtpeb-edw"><path class="q0c5uqbol"/><path class="tw06w4bkl"/></g>`,
		"fallback": "solar:masks-bold-duotone",
	});
}

export default Component;
