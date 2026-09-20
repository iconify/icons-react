import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/ina_babpj.css';
import '../../css/k/k1vkz0b3o.css';
import '../../css/z/z7h9dmbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ina_babpj"/><path class="k1vkz0b3o"/><rect class="z7h9dmbpz"/></g>`,
		"fallback": "mage:question-mark-square",
	});
}

export default Component;
