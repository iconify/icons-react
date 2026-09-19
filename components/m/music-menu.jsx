import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/p/py5rit7yk.css';
import '../../css/k/kj1z06h4t.css';
import '../../css/p/p8jc2xfbu.css';
import '../../css/d/dhegxxb2q.css';
import '../../css/e/e0w-wrbpt.css';
import '../../css/v/v3msybgzo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="py5rit7yk"/><path class="kj1z06h4t"/><path clip-rule="evenodd" class="p8jc2xfbu"/><path class="dhegxxb2q"/><path class="e0w-wrbpt"/><path class="v3msybgzo"/></g>`,
		"fallback": "icon-park:music-menu",
	});
}

export default Component;
