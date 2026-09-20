import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vom9q9u4u.css';
import '../../css/q/q8390zcod.css';
import '../../css/v/vl8q6rbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vom9q9u4u"/><path class="q8390zcod"/><path class="vl8q6rbbk"/></g>`,
		"fallback": "streamline-sharp:rate-stretch-tool",
	});
}

export default Component;
