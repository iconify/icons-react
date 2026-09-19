import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/d/d7m39n8ut.css';
import '../../css/u/ur70ribyv.css';
import '../../css/q/q1x80pbnz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="d7m39n8ut"/><path class="ur70ribyv"/><path class="q1x80pbnz"/></g>`,
		"fallback": "icon-park:rss",
	});
}

export default Component;
