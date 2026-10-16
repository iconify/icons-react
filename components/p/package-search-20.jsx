import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpqqzrelk.css';
import '../../css/m/m-ue7vdss.css';
import '../../css/b/b4s-c3b0z.css';
import '../../css/c/cgo_eslee.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpqqzrelk"/><path class="m-ue7vdss"/><path class="b4s-c3b0z"/><path class="cgo_eslee"/>`,
		"fallback": "energy-icons:package-search-20",
	});
}

export default Component;
