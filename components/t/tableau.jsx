import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1y5wubyd.css';
import '../../css/k/kko08wbig.css';
import '../../css/l/ll6z6iofx.css';
import '../../css/b/b7-ki5bko.css';
import '../../css/z/zwsl3sb3u.css';
import '../../css/z/z2vj6abwk.css';
import '../../css/z/znjy9cbsu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1y5wubyd"/><path class="kko08wbig"/><path class="ll6z6iofx"/><path class="b7-ki5bko"/><path class="zwsl3sb3u"/><path class="z2vj6abwk"/><path class="znjy9cbsu"/>`,
		"fallback": "selfhst:tableau",
	});
}

export default Component;
