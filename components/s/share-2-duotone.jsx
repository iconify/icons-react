import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kkc51l8ou.css';
import '../../css/n/nr9uadclk.css';
import '../../css/q/qerygub2t.css';
import '../../css/d/dthlj7xkb.css';
import '../../css/k/k6wtyyylr.css';
import '../../css/r/r59umtkpx.css';
import '../../css/s/skh_z9byd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kkc51l8ou"/><path class="nr9uadclk"/><path class="qerygub2t"/><path class="dthlj7xkb"/><path class="k6wtyyylr"/><path class="r59umtkpx"/><path class="skh_z9byd"/></g>`,
		"fallback": "lucide-extended:share-2-duotone",
	});
}

export default Component;
