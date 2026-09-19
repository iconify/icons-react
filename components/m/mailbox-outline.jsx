import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qerertb4y.css';
import '../../css/d/d6kmw2bit.css';
import '../../css/m/m2fux_dtm.css';
import '../../css/e/emkks-poi.css';
import '../../css/h/h3o1kbbyq.css';
import '../../css/o/of0htcwrh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qerertb4y"/><path class="d6kmw2bit"/><path clip-rule="evenodd" class="m2fux_dtm"/><path clip-rule="evenodd" class="emkks-poi"/><path class="h3o1kbbyq"/><path clip-rule="evenodd" class="of0htcwrh"/></g>`,
		"fallback": "glyphs:mailbox-outline",
	});
}

export default Component;
