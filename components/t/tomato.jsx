import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/awdtvccwa.css';
import '../../css/a/as4b8ybnt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="awdtvccwa"/><path class="as4b8ybnt"/></g>`,
		"fallback": "icon-park-outline:tomato",
	});
}

export default Component;
