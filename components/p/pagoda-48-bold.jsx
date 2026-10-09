import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqcl30bsu.css';
import '../../css/x/x5baurw3f.css';
import '../../css/o/o1id5zqkj.css';
import '../../css/e/eppinxb0s.css';
import '../../css/o/oz0-7c0kb.css';
import '../../css/q/q8jz89bok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqcl30bsu"/><path class="x5baurw3f"/><path class="o1id5zqkj"/><path class="eppinxb0s"/><path class="oz0-7c0kb"/><path class="q8jz89bok"/>`,
		"fallback": "energy-icons:pagoda-48-bold",
	});
}

export default Component;
