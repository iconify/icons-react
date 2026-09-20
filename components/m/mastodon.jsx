import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxxoc1biv.css';
import '../../css/i/i2771o-vm.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/oqc87sf7z.css';
import '../../css/t/t4swahbuy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxxoc1biv"/><path class="i2771o-vm"/><g class="jn8qy4bru"><path class="oqc87sf7z"/><path class="t4swahbuy"/></g>`,
		"fallback": "openmoji:mastodon",
	});
}

export default Component;
