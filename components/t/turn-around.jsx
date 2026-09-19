import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qn7kib-8y.css';
import '../../css/u/ui3uycp9j.css';
import '../../css/t/tc8jmyben.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="qn7kib-8y"/><path class="ui3uycp9j"/><path class="tc8jmyben"/></g>`,
		"fallback": "icon-park-solid:turn-around",
	});
}

export default Component;
