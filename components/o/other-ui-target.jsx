import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8-uw-btt.css';
import '../../css/t/tmcxzhbqx.css';
import '../../css/c/c3ivfk8mr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8-uw-btt"/><path class="tmcxzhbqx"/><path class="c3ivfk8mr"/>`,
		"fallback": "streamline-block:other-ui-target",
	});
}

export default Component;
