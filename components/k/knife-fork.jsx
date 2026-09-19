import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lf18mo9uc.css';
import '../../css/z/z03nzwvng.css';
import '../../css/o/o2qtt6bjf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lf18mo9uc"/><path class="z03nzwvng"/><path class="o2qtt6bjf"/></g>`,
		"fallback": "icon-park-solid:knife-fork",
	});
}

export default Component;
