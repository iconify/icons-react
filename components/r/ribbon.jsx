import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bf5_xfbow.css';
import '../../css/d/die8b53tm.css';
import '../../css/l/lx9jh7bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bf5_xfbow"/><path class="die8b53tm"/><path class="lx9jh7bof"/></g>`,
		"fallback": "mage:ribbon",
	});
}

export default Component;
