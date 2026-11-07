import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jos6ucc-f.css';
import '../../css/q/q0fj2uust.css';
import '../../css/g/gkg0-0bhf.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/ojdl96y2v.css';
import '../../css/r/r5pybk82q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jos6ucc-f"/><path class="q0fj2uust"/><path clip-rule="evenodd" class="gkg0-0bhf"/><g class="xtpeb-edw"><path class="ojdl96y2v"/><path class="r5pybk82q"/></g>`,
		"fallback": "solar:music-note-slider-2-bold-duotone",
	});
}

export default Component;
