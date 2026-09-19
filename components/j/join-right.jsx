import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y87j-5jav.css';
import '../../css/q/qxxagsk8y.css';
import '../../css/j/j0jwr8ajm.css';
import '../../css/m/mheknxbpv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y87j-5jav"/><path class="qxxagsk8y"/><path class="j0jwr8ajm"/><path class="mheknxbpv"/>`,
		"fallback": "carbon:join-right",
	});
}

export default Component;
