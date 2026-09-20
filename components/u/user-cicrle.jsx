import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ok4gpdcio.css';
import '../../css/h/hlpokcbfc.css';
import '../../css/w/w49sw5b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ok4gpdcio"/><circle class="hlpokcbfc"/><path class="w49sw5b-z"/></g>`,
		"fallback": "lets-icons:user-cicrle",
	});
}

export default Component;
