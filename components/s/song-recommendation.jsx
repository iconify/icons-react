import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nb0x9sbrj.css';
import '../../css/t/t8kklq1jq.css';
import '../../css/r/r-dv45bed.css';
import '../../css/c/chtvrs93h.css';
import '../../css/o/otvpmrblq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nb0x9sbrj"/><path class="t8kklq1jq"/><path class="r-dv45bed"/><path class="chtvrs93h"/><path class="otvpmrblq"/></g>`,
		"fallback": "streamline-color:song-recommendation",
	});
}

export default Component;
