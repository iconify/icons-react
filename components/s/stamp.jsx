import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/b/blt3vccph.css';
import '../../css/d/d_2zsxsym.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="blt3vccph"/><circle class="d_2zsxsym"/></g>`,
		"fallback": "icon-park:stamp",
	});
}

export default Component;
