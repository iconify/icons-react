import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/u/uk5fpvbxm.css';
import '../../css/i/izn5n0btt.css';
import '../../css/x/xo_jjmbgq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="uk5fpvbxm"/><path class="izn5n0btt"/><path class="xo_jjmbgq"/></g>`,
		"fallback": "streamline-kameleon-color:traffic-light-pop",
	});
}

export default Component;
