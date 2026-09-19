import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/y/yn7lww4xp.css';
import '../../css/c/cz-xh6lnw.css';
import '../../css/n/ni1ig64hd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="yn7lww4xp"/><path class="cz-xh6lnw"/><path class="ni1ig64hd"/></g>`,
		"fallback": "icon-park-solid:lip-gloss",
	});
}

export default Component;
