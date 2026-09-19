import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anms5nb2o.css';
import '../../css/c/c9e9qbbyb.css';
import '../../css/h/hbq5upbdg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anms5nb2o"/><path class="c9e9qbbyb"/><path class="hbq5upbdg"/>`,
		"fallback": "ion:mic-off-circle-outline",
	});
}

export default Component;
