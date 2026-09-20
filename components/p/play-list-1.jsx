import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/m/mb2dhrbmp.css';
import '../../css/h/h1ky5u9mz.css';
import '../../css/l/ldkkwxbud.css';
import '../../css/i/iuhgsyg_l.css';
import '../../css/w/wrd43sbnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="mb2dhrbmp"/><path class="h1ky5u9mz"/><path class="ldkkwxbud"/><path class="iuhgsyg_l"/><path class="wrd43sbnu"/></g>`,
		"fallback": "streamline-sharp-color:play-list-1",
	});
}

export default Component;
