import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tixg4gbgk.css';
import '../../css/o/ox2_dgbyg.css';
import '../../css/c/cgo_eslee.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tixg4gbgk"/><path class="ox2_dgbyg"/><path class="cgo_eslee"/>`,
		"fallback": "energy-icons:mail-search-20",
	});
}

export default Component;
