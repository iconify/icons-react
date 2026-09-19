import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjf3h00br.css';
import '../../css/j/jm0mfbcid.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjf3h00br"/><path class="jm0mfbcid"/>`,
		"fallback": "carbon:strategy-play",
	});
}

export default Component;
