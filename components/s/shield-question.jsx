import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u13-m5bej.css';
import '../../css/g/gdtao5tpk.css';
import '../../css/w/w_uljabcc.css';
import '../../css/a/azlpvpbuc.css';
import '../../css/e/e-b97duyb.css';
import '../../css/o/ovlqcnb1e.css';
import '../../css/v/v9988ubde.css';
import '../../css/b/bfebaacks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u13-m5bej wm-shadow"/><path class="gdtao5tpk wm-k"/><path class="w_uljabcc wm-k"/><path class="azlpvpbuc wm-k"/><path class="e-b97duyb wm-k"/><path class="ovlqcnb1e wm-shine"/><path class="v9988ubde wm-k"/><path class="bfebaacks wm-a"/>`,
		"fallback": "withicons-plush:shield-question",
	});
}

export default Component;
