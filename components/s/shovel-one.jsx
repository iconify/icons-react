import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/x/xf4evypyg.css';
import '../../css/h/h5tuzsbby.css';
import '../../css/r/runb99r6d.css';
import '../../css/w/wkk1ksb4p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="xf4evypyg"/><path class="h5tuzsbby"/><path class="runb99r6d"/><path class="wkk1ksb4p"/></g>`,
		"fallback": "icon-park:shovel-one",
	});
}

export default Component;
