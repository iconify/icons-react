import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8p4fabkp.css';
import '../../css/d/d_g8hik9b.css';
import '../../css/d/d4yobybuy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8p4fabkp"/><path class="d_g8hik9b"/><path class="d4yobybuy"/>`,
		"fallback": "ion:logo-designernews-outline",
	});
}

export default Component;
