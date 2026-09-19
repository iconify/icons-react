import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkpf3xbvg.css';
import '../../css/c/cyeoe2uoe.css';
import '../../css/z/zh12vprwm.css';
import '../../css/q/q0bpv7buf.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkpf3xbvg"/><path class="cyeoe2uoe"/><path class="zh12vprwm"/><path class="q0bpv7buf"/>`,
		"fallback": "flag:sy-4x3",
	});
}

export default Component;
