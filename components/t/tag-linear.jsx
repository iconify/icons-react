import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a2sl48bmy.css';
import '../../css/o/ozst3gb1r.css';
import '../../css/f/f9c6rlbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a2sl48bmy"/><circle transform="rotate(-45 8.607 8.879)" class="ozst3gb1r"/><path class="f9c6rlbtf"/></g>`,
		"fallback": "solar:tag-linear",
	});
}

export default Component;
