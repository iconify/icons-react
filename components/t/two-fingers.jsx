import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/j/jddr444ma.css';
import '../../css/e/eivoixbxz.css';
import '../../css/w/wp5pbcw0d.css';
import '../../css/q/qyotc1bwx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="jddr444ma"/><path class="eivoixbxz"/><path class="wp5pbcw0d"/><path class="qyotc1bwx"/></g>`,
		"fallback": "icon-park:two-fingers",
	});
}

export default Component;
