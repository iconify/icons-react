import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1yx7eixm.css';
import '../../css/h/hf-3oib-y.css';
import '../../css/t/tmpm_6byj.css';
import '../../css/h/h9t6l4bmz.css';
import '../../css/p/pb7vd9b3l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p1yx7eixm"><path class="hf-3oib-y"/><circle class="tmpm_6byj"/><circle class="h9t6l4bmz"/><circle class="pb7vd9b3l"/></g>`,
		"fallback": "icon-park-solid:list-one",
	});
}

export default Component;
