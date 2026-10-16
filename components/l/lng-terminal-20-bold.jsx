import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c10rf7bkz.css';
import '../../css/e/em_yc89qg.css';
import '../../css/i/iyvdefbei.css';
import '../../css/b/by_69xb5j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c10rf7bkz"/><path class="em_yc89qg"/><path class="iyvdefbei"/><path class="by_69xb5j"/>`,
		"fallback": "energy-icons:lng-terminal-20-bold",
	});
}

export default Component;
