import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qemxtqb3v.css';
import '../../css/r/r4-rvcapq.css';
import '../../css/m/m3pw4db4r.css';
import '../../css/n/nzvyk8_7m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qemxtqb3v"/><path class="r4-rvcapq"/><path class="m3pw4db4r"/><path class="nzvyk8_7m"/>`,
		"fallback": "energy-icons:package-search-48-bold",
	});
}

export default Component;
