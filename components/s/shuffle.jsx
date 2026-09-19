import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dkr0sjjql.css';
import '../../css/y/yg200-boa.css';
import '../../css/o/opakkwbyw.css';
import '../../css/v/v7tbmdb4a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="dkr0sjjql"/><path class="yg200-boa"/><path class="opakkwbyw"/><path class="v7tbmdb4a"/></g>`,
		"fallback": "icon-park:shuffle",
	});
}

export default Component;
