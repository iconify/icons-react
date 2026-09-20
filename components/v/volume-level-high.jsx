import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/wa_o9obqo.css';
import '../../css/y/y4pm99bhn.css';
import '../../css/b/bpb-me2oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="wa_o9obqo"/><path class="y4pm99bhn"/><path class="bpb-me2oe"/></g>`,
		"fallback": "streamline-sharp-color:volume-level-high",
	});
}

export default Component;
