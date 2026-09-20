import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/v/vs_j5hb3i.css';
import '../../css/h/hl4ihox2a.css';
import '../../css/h/htq0vcmsf.css';
import '../../css/g/ggtlo8gux.css';
import '../../css/e/elog49kni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="vs_j5hb3i"/><path class="hl4ihox2a"/><path class="htq0vcmsf"/><path class="ggtlo8gux"/><path class="elog49kni"/></g>`,
		"fallback": "streamline-logos:iwiw-logo-2",
	});
}

export default Component;
