import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/x8jy2_b5i.css';
import '../../css/w/w2tu_jpwj.css';
import '../../css/v/vgcj7aceo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="x8jy2_b5i"/><path class="w2tu_jpwj"/><path class="vgcj7aceo"/></g>`,
		"fallback": "streamline-plump:theater-mask",
	});
}

export default Component;
