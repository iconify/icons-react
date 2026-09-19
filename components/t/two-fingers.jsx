import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/v/v3djtrbsu.css';
import '../../css/w/w6vf7jb7x.css';
import '../../css/j/j61sup21m.css';
import '../../css/u/udqd7i92j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="v3djtrbsu"/><path class="w6vf7jb7x"/><path class="j61sup21m"/><path class="udqd7i92j"/></g>`,
		"fallback": "icon-park-outline:two-fingers",
	});
}

export default Component;
