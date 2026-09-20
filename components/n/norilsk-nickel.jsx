import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggqsrbsm.css';
import '../../css/e/en2ep-wvj.css';
import '../../css/p/pl036ib_f.css';

const viewBox = {"width":1043,"height":508};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rggqsrbsm"/><path class="en2ep-wvj"/><path class="pl036ib_f"/>`,
		"fallback": "thesvg-color:norilsk-nickel",
	});
}

export default Component;
