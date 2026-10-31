import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/b/bjjhpqbal.css';
import '../../css/a/art_n4bzi.css';
import '../../css/a/aqnt38bta.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="bjjhpqbal"/><path class="art_n4bzi"/><path class="aqnt38bta"/></g>`,
		"fallback": "streamline-kameleon-color:towel-pop",
	});
}

export default Component;
