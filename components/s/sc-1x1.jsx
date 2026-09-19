import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k89d1bbde.css';
import '../../css/i/innr1n4sq.css';
import '../../css/q/qyo57ccgn.css';
import '../../css/v/ve4j__bhu.css';
import '../../css/e/eoljevgin.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k89d1bbde"/><path class="innr1n4sq"/><path class="qyo57ccgn"/><path class="ve4j__bhu"/><path class="eoljevgin"/>`,
		"fallback": "flag:sc-1x1",
	});
}

export default Component;
