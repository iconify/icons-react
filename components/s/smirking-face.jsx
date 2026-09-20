import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c479rxbrg.css';
import '../../css/z/zl50wac4b.css';
import '../../css/q/qzdo7vngp.css';
import '../../css/w/weaftlw2e.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c479rxbrg"/><circle class="zl50wac4b"/><path class="qzdo7vngp"/><path class="weaftlw2e"/>`,
		"fallback": "openmoji:smirking-face",
	});
}

export default Component;
