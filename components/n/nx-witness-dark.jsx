import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kegoc-59e.css';
import '../../css/y/yn5w2kbbj.css';
import '../../css/u/uc21-y-ff.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kegoc-59e"/><path class="yn5w2kbbj"/><path class="uc21-y-ff"/>`,
		"fallback": "selfhst:nx-witness-dark",
	});
}

export default Component;
