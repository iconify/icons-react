import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpctkhcgf.css';
import '../../css/c/cpnat3u3d.css';
import '../../css/b/b14djybkm.css';

const viewBox = {"width":402,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xpctkhcgf"/><path class="cpnat3u3d"/><path class="b14djybkm"/>`,
		"fallback": "thesvg:mage-ai",
	});
}

export default Component;
