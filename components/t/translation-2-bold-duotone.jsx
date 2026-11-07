import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rma8h1e1k.css';
import '../../css/b/b4m79xbnb.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/x/x30gl9r7w.css';
import '../../css/d/dntco1pnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rma8h1e1k"/><path class="b4m79xbnb"/><g class="xtpeb-edw"><path class="x30gl9r7w"/><path class="dntco1pnf"/></g>`,
		"fallback": "solar:translation-2-bold-duotone",
	});
}

export default Component;
