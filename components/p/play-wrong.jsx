import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/r2704obmd.css';
import '../../css/x/xy1j02b6l.css';
import '../../css/h/hbnt5jbau.css';
import '../../css/c/crk1s8bim.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="r2704obmd"/><path class="xy1j02b6l"/><path class="hbnt5jbau"/><path class="crk1s8bim"/></g>`,
		"fallback": "icon-park:play-wrong",
	});
}

export default Component;
