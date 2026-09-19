import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0zzapbzv.css';
import '../../css/o/on2puab-k.css';
import '../../css/h/hiw3sh29t.css';
import '../../css/s/svtmvzbpa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y0zzapbzv"/><rect class="on2puab-k"/><rect class="hiw3sh29t"/><path class="svtmvzbpa"/></g>`,
		"fallback": "icon-park-outline:projector-one",
	});
}

export default Component;
