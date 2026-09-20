import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lrbheqbcl.css';
import '../../css/m/m__3g0wki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lrbheqbcl"/><path class="m__3g0wki"/></g>`,
		"fallback": "mage:tablet",
	});
}

export default Component;
