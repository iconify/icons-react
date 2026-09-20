import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rcbr38blk.css';
import '../../css/b/bjqk9ebtq.css';
import '../../css/x/xrbno9bto.css';
import '../../css/b/be9t2hndj.css';
import '../../css/m/myrp_qwdl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rcbr38blk"/><path clip-rule="evenodd" class="bjqk9ebtq"/><path class="xrbno9bto"/><path class="be9t2hndj"/><path class="myrp_qwdl"/></g>`,
		"fallback": "streamline-color:one-vesus-one",
	});
}

export default Component;
