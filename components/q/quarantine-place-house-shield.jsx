import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/km9at4bxk.css';
import '../../css/j/jhucqqbwo.css';
import '../../css/a/aodbtw1pq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="km9at4bxk"/><path class="jhucqqbwo"/><path class="aodbtw1pq"/></g>`,
		"fallback": "covid:quarantine-place-house-shield",
	});
}

export default Component;
