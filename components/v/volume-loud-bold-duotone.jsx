import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-vla9b5h.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kzd57cc0u.css';
import '../../css/h/h3g8i1brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-vla9b5h"/><g class="xtpeb-edw"><path class="kzd57cc0u"/><path class="h3g8i1brp"/></g>`,
		"fallback": "solar:volume-loud-bold-duotone",
	});
}

export default Component;
