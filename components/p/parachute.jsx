import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/d/dn-moybpl.css';
import '../../css/j/jmvvdibbo.css';
import '../../css/m/mpnkaz1im.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="dn-moybpl"/><path class="jmvvdibbo"/><path class="mpnkaz1im"/></g>`,
		"fallback": "icon-park:parachute",
	});
}

export default Component;
