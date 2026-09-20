import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/x/xhk16vb3f.css';
import '../../css/z/z1axs8b3r.css';
import '../../css/a/a6gsuvbxu.css';
import '../../css/f/f68x7_b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="xhk16vb3f"/><path class="z1axs8b3r"/><path class="a6gsuvbxu"/><path class="f68x7_b6s"/></g>`,
		"fallback": "streamline-sharp-color:watch-circle-disable",
	});
}

export default Component;
