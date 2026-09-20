import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/q4z7accis.css';
import '../../css/r/rqbsb5yod.css';
import '../../css/b/b7h7ulb6g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="q4z7accis"/><path class="rqbsb5yod"/><path class="b7h7ulb6g"/></g>`,
		"fallback": "teenyicons:target-outline",
	});
}

export default Component;
