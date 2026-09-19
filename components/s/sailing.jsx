import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/v/varruxceu.css';
import '../../css/k/k64kodbrc.css';
import '../../css/e/ewyb6cc0i.css';
import '../../css/w/w30ktoplr.css';
import '../../css/c/cgtu72bsp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="varruxceu"/><path class="k64kodbrc"/><path class="ewyb6cc0i"/><path class="w30ktoplr"/><path class="cgtu72bsp"/></g>`,
		"fallback": "icon-park:sailing",
	});
}

export default Component;
