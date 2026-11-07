import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/ojdl96y2v.css';
import '../../css/r/r5pybk82q.css';
import '../../css/p/peg0m9y2g.css';
import '../../css/h/h34bhmoma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="ojdl96y2v"/><path class="r5pybk82q"/></g><path class="peg0m9y2g"/><path clip-rule="evenodd" class="h34bhmoma"/>`,
		"fallback": "solar:music-note-slider-bold-duotone",
	});
}

export default Component;
