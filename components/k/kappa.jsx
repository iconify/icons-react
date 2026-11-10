import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/psncsiz9v.css';
import '../../css/h/hjixulbzq.css';
import '../../css/a/a3525ioso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="psncsiz9v"/><path class="hjixulbzq"/><path class="a3525ioso"/></g>`,
		"fallback": "matita:kappa",
	});
}

export default Component;
