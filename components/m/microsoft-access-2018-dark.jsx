import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-it9rjbp.css';
import '../../css/o/oamxgnbof.css';
import '../../css/x/xj-1r8bev.css';
import '../../css/u/u92_85blu.css';
import '../../css/g/g0c3biwvw.css';
import '../../css/t/tuk_p_mrb.css';
import '../../css/p/pkkmpgpad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="o-it9rjbp"/><path class="oamxgnbof"/><path class="xj-1r8bev"/><path class="u92_85blu"/><path class="g0c3biwvw"/><path class="tuk_p_mrb"/><path class="pkkmpgpad"/>`,
		"fallback": "selfhst:microsoft-access-2018-dark",
	});
}

export default Component;
