import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/l/lw629196w.css';
import '../../css/q/qy6mm5b9k.css';
import '../../css/m/m3squ5b0c.css';
import '../../css/i/i9krccccc.css';
import '../../css/q/q3k19_99h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="lw629196w"/><path class="qy6mm5b9k"/><path class="m3squ5b0c"/><path class="i9krccccc"/><path class="q3k19_99h"/></g>`,
		"fallback": "streamline-sharp-color:no-photo-taking-zone",
	});
}

export default Component;
