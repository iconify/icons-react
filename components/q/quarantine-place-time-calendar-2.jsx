import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/s6061czwo.css';
import '../../css/u/uu1gnytcw.css';
import '../../css/g/g26oae4ld.css';
import '../../css/z/zgldf9_sj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="s6061czwo"/><path class="uu1gnytcw"/><path class="g26oae4ld"/><path class="zgldf9_sj"/></g>`,
		"fallback": "covid:quarantine-place-time-calendar-2",
	});
}

export default Component;
