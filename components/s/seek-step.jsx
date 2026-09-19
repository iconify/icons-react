import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/n/numvsbbtg.css';
import '../../css/t/tbhcwf75b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="numvsbbtg"/><path class="tbhcwf75b"/></g>`,
		"fallback": "glyphs-poly:seek-step",
	});
}

export default Component;
