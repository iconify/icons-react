import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sc5h-7bek.css';
import '../../css/f/figgh997t.css';
import '../../css/x/xkvmjygai.css';
import '../../css/t/t2bo1bcih.css';
import '../../css/q/qe0szlqcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sc5h-7bek"/><path class="figgh997t"/><path class="xkvmjygai"/><path class="t2bo1bcih"/><path class="qe0szlqcv"/></g>`,
		"fallback": "streamline-ultimate:spaceship",
	});
}

export default Component;
