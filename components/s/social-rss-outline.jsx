import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm38_v6rc.css';
import '../../css/v/vvnu2369n.css';
import '../../css/b/bwfceobyr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm38_v6rc"/><path class="vvnu2369n"/><path class="bwfceobyr"/>`,
		"fallback": "ion:social-rss-outline",
	});
}

export default Component;
