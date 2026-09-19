import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppv50ibab.css';
import '../../css/g/gkr3d_b7o.css';
import '../../css/m/mx3fuqlod.css';
import '../../css/g/gzqzkibro.css';
import '../../css/n/nrb0af6fj.css';

const viewBox = {"width":99,"height":65.991};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppv50ibab"/><path class="gkr3d_b7o"/><path class="mx3fuqlod"/><path class="gzqzkibro"/><path class="nrb0af6fj"/>`,
		"fallback": "flat-ui:news",
	});
}

export default Component;
