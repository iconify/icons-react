import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cra2abc4o.css';
import '../../css/c/cmem7pb-p.css';
import '../../css/e/eo_a9mqog.css';
import '../../css/z/z1ymtzbpk.css';
import '../../css/z/zgozv61oq.css';

const viewBox = {"width":1201.4,"height":324.47};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cra2abc4o"/><path class="cmem7pb-p"/><path class="eo_a9mqog"/><path class="z1ymtzbpk"/><path class="zgozv61oq"/>`,
		"fallback": "thesvg-color:tintas-vital",
	});
}

export default Component;
