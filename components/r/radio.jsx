import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/y/yasgjhb6v.css';
import '../../css/g/g93zddctb.css';
import '../../css/p/pr64habpf.css';
import '../../css/t/tl0080xqi.css';
import '../../css/s/sw7893bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="yasgjhb6v"/><path class="g93zddctb"/><path class="pr64habpf"/><path class="tl0080xqi"/><path class="sw7893bst"/></g>`,
		"fallback": "streamline-sharp-color:radio",
	});
}

export default Component;
