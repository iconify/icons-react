import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a371co23j.css';
import '../../css/t/t8rmpkbke.css';
import '../../css/m/mj_ulobib.css';
import '../../css/e/e2kroochg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a371co23j"/><path class="t8rmpkbke"/><path class="mj_ulobib"/><path class="e2kroochg"/>`,
		"fallback": "fxemoji:opticaldisc",
	});
}

export default Component;
