import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkovc3a7g.css';
import '../../css/e/egti8_jds.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkovc3a7g"/><path class="egti8_jds"/>`,
		"fallback": "ion:md-git-pull-request",
	});
}

export default Component;
