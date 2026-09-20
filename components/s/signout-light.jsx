import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5g1yj-up.css';
import '../../css/v/vv-w0sjvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5g1yj-up"/><path class="vv-w0sjvg"/>`,
		"fallback": "stash:signout-light",
	});
}

export default Component;
