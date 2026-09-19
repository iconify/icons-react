import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0fq7z9-w.css';
import '../../css/h/hzfhhfw2n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0fq7z9-w"/><path class="hzfhhfw2n"/>`,
		"fallback": "ion:ios-share",
	});
}

export default Component;
