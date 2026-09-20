import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjmrwubzx.css';
import '../../css/r/roph-ga5n.css';
import '../../css/t/tu9oyqbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjmrwubzx"/><path class="roph-ga5n"/><path class="tu9oyqbqv"/>`,
		"fallback": "token:qrdo",
	});
}

export default Component;
