import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtg_89bpo.css';
import '../../css/t/tv3pd_b5j.css';
import '../../css/l/lb1lpfbgu.css';
import '../../css/j/j59snk35s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtg_89bpo"/><path class="tv3pd_b5j"/><path class="lb1lpfbgu"/><path class="j59snk35s"/>`,
		"fallback": "cryptocurrency:mth",
	});
}

export default Component;
