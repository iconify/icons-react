import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tps0pable.css';
import '../../css/l/lrkc4ubzw.css';
import '../../css/s/sgl_4_kwk.css';
import '../../css/t/tbw07rbmi.css';
import '../../css/h/ho9l-mb_n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g display="block"><path class="tps0pable"/><path class="lrkc4ubzw"/><path class="sgl_4_kwk"/><path class="tbw07rbmi"/><path class="ho9l-mb_n"/></g>`,
		"fallback": "iconito:potato",
	});
}

export default Component;
