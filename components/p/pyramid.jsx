import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/lyejctb-k.css';
import '../../css/p/p1ss20z1i.css';
import '../../css/o/o-2qktdxl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path clip-rule="evenodd" class="lyejctb-k"/><path class="p1ss20z1i"/><path class="o-2qktdxl"/></g>`,
		"fallback": "icon-park:pyramid",
	});
}

export default Component;
