import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9pq-abme.css';
import '../../css/s/sgctswr3q.css';
import '../../css/m/map-b7bpq.css';
import '../../css/o/os1uj79jw.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/z/ztg5wmoma.css';
import '../../css/h/hiot3ubwz.css';
import '../../css/r/rnbfaib6f.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k9pq-abme"><circle class="sgctswr3q"/><path class="map-b7bpq"/><path class="os1uj79jw"/></g><g class="brzn_0bpr"><circle class="ztg5wmoma"/><path class="hiot3ubwz"/><path class="rnbfaib6f"/></g>`,
		"fallback": "openmoji:man-in-lotus-position-medium-skin-tone",
	});
}

export default Component;
