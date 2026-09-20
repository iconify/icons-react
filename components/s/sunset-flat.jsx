import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clqqdh5xt.css';
import '../../css/h/hd_bo92hn.css';
import '../../css/a/a8jhbuhnd.css';
import '../../css/l/lia-gobfx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="clqqdh5xt"/><path class="hd_bo92hn"/><path class="a8jhbuhnd"/><path class="lia-gobfx"/></g>`,
		"fallback": "streamline-plump-color:sunset-flat",
	});
}

export default Component;
