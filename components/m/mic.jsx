import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yz0l1ghtu.css';
import '../../css/m/m-85aw1xu.css';
import '../../css/c/cytx0q19y.css';
import '../../css/k/k4xij9_1f.css';
import '../../css/l/l61z4uyyw.css';
import '../../css/a/ay-p57qmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="yz0l1ghtu"/><path class="m-85aw1xu"/><path class="cytx0q19y"/><path class="k4xij9_1f"/><path class="l61z4uyyw"/><path class="ay-p57qmd"/></g>`,
		"fallback": "matita:mic",
	});
}

export default Component;
