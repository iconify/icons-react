import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gqwksoj0t.css';
import '../../css/a/am4edzbjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gqwksoj0t wm-k"/><path class="am4edzbjg wm-a"/></g>`,
		"fallback": "withicons:radar-gloss",
	});
}

export default Component;
