import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/at_81ebpk.css';
import '../../css/b/bqfg75b4w.css';
import '../../css/g/gz3zbhgyq.css';
import '../../css/g/gb8649bzx.css';
import '../../css/s/su3mifb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="at_81ebpk"/><path class="bqfg75b4w"/><path class="gz3zbhgyq"/><path class="gb8649bzx"/><path class="su3mifb4l"/></g>`,
		"fallback": "solar:share-line-duotone",
	});
}

export default Component;
