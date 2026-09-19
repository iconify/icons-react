import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/m/m3ts_9bhm.css';
import '../../css/j/j2irmjbol.css';
import '../../css/b/bwcra3bfd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="m3ts_9bhm"/><path class="j2irmjbol"/><path class="bwcra3bfd"/></g>`,
		"fallback": "icon-park-outline:snake-zodiac",
	});
}

export default Component;
