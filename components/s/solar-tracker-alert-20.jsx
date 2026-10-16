import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab2lv3v6m.css';
import '../../css/t/t8akbzbjd.css';
import '../../css/l/loe-m_xnw.css';
import '../../css/y/yjuc4h0xr.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab2lv3v6m"/><path class="t8akbzbjd"/><path class="loe-m_xnw"/><path class="yjuc4h0xr"/><path class="nq5_p_bzp"/>`,
		"fallback": "energy-icons:solar-tracker-alert-20",
	});
}

export default Component;
