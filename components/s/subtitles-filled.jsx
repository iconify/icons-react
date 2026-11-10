import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkdyjmbeh.css';
import '../../css/l/lg_bjhb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bkdyjmbeh"/><path class="lg_bjhb3p"/></g>`,
		"fallback": "andrsrxn:subtitles-filled",
	});
}

export default Component;
