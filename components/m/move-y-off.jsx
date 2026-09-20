import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ymhblhbvq.css';
import '../../css/s/s2m_4lbwf.css';
import '../../css/k/k-q1j33lg.css';
import '../../css/p/pp5xcodpa.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ymhblhbvq"/><path clip-rule="evenodd" class="s2m_4lbwf"/><path clip-rule="evenodd" class="k-q1j33lg"/><path clip-rule="evenodd" class="pp5xcodpa"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:move-y-off",
	});
}

export default Component;
