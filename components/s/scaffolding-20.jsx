import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz_mm6jom.css';
import '../../css/c/c30yugl2g.css';
import '../../css/l/llq1prb2j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz_mm6jom"/><path class="c30yugl2g"/><path class="llq1prb2j"/>`,
		"fallback": "energy-icons:scaffolding-20",
	});
}

export default Component;
