import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezce_6bqy.css';
import '../../css/x/xtew6gkwi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezce_6bqy"/><path class="xtew6gkwi"/>`,
		"fallback": "icomoon-free:stumbleupon",
	});
}

export default Component;
