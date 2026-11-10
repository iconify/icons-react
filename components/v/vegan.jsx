import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/nb0iq9bmy.css';
import '../../css/x/xygd3q9eo.css';
import '../../css/s/s46ktacem.css';
import '../../css/j/jvg4tbb-m.css';
import '../../css/b/bdupd_bwe.css';
import '../../css/g/g7ym2qbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="nb0iq9bmy"/><path class="xygd3q9eo"/><path class="s46ktacem"/><path class="jvg4tbb-m"/><path class="bdupd_bwe"/><path class="g7ym2qbsy"/></g>`,
		"fallback": "matita:vegan",
	});
}

export default Component;
