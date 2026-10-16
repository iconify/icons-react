import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5r654krd.css';
import '../../css/r/rzv19ackg.css';
import '../../css/k/kiwq7bbdz.css';
import '../../css/l/lo37u5bfu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5r654krd"/><path class="rzv19ackg"/><path class="kiwq7bbdz"/><path class="lo37u5bfu"/>`,
		"fallback": "energy-icons:screen-rotate-20",
	});
}

export default Component;
