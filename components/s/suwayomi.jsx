import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqep12viy.css';
import '../../css/u/uk76csy7i.css';
import '../../css/d/dq5sh1btp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="tqep12viy"/><circle class="uk76csy7i"/><path class="dq5sh1btp"/>`,
		"fallback": "selfhst:suwayomi",
	});
}

export default Component;
