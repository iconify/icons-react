import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m0xrrzbhk.css';
import '../../css/b/bzwyxw3nr.css';
import '../../css/q/qosxyynna.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="m0xrrzbhk"/><path class="bzwyxw3nr"/><path class="qosxyynna"/></g>`,
		"fallback": "icon-park:seo-folder",
	});
}

export default Component;
