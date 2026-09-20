import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xjlwibcff.css';
import '../../css/z/z3pb2hbgm.css';
import '../../css/o/oqirhj0rv.css';
import '../../css/h/hqyygc21n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xjlwibcff"/><path clip-rule="evenodd" class="z3pb2hbgm"/><path clip-rule="evenodd" class="oqirhj0rv"/><path class="hqyygc21n"/></g>`,
		"fallback": "streamline-flex-color:school-flat",
	});
}

export default Component;
