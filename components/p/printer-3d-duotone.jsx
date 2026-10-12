import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rrbcwybsn.css';
import '../../css/x/xci45cnkx.css';
import '../../css/s/s585j5b6i.css';
import '../../css/s/s78wgswbm.css';
import '../../css/q/qyj_m3jrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rrbcwybsn"/><path class="xci45cnkx"/><path class="s585j5b6i"/><path class="s78wgswbm"/><path class="qyj_m3jrw"/></g>`,
		"fallback": "lucide-extended:printer-3d-duotone",
	});
}

export default Component;
