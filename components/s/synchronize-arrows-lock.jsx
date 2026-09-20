import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gfrtzw2sv.css';
import '../../css/p/pvr2ugb9h.css';
import '../../css/t/t_tn2nbpg.css';
import '../../css/e/endzr7_ol.css';
import '../../css/x/xifm14bsd.css';
import '../../css/x/xks2kxbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gfrtzw2sv"/><path class="pvr2ugb9h"/><path class="t_tn2nbpg"/><path class="endzr7_ol"/><path class="xifm14bsd"/><path class="xks2kxbut"/></g>`,
		"fallback": "streamline-ultimate-color:synchronize-arrows-lock",
	});
}

export default Component;
