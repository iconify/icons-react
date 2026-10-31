import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/t/t13r-gh4e.css';
import '../../css/p/pe621td8m.css';
import '../../css/j/jxik-lbhy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="t13r-gh4e"/><path class="pe621td8m"/><path class="jxik-lbhy"/></g>`,
		"fallback": "streamline-kameleon-color:sofa-3-pop",
	});
}

export default Component;
