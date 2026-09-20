import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/opsysy50l.css';
import '../../css/t/trv2oqboo.css';
import '../../css/s/s8pvz-bgr.css';
import '../../css/k/kk0w94nfr.css';
import '../../css/n/nbp_9nbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="opsysy50l"/><path class="trv2oqboo"/></g><path class="s8pvz-bgr"/><path class="kk0w94nfr"/><path class="nbp_9nbti"/></g>`,
		"fallback": "solar:share-bold-duotone",
	});
}

export default Component;
