import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/u/uzon_7fuc.css';
import '../../css/f/fs84avluu.css';
import '../../css/g/ghmy92bez.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="uzon_7fuc"/><path class="fs84avluu"/><path class="ghmy92bez"/></g>`,
		"fallback": "icon-park:sailboat-one",
	});
}

export default Component;
