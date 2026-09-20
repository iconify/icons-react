import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mopfn8bqt.css';
import '../../css/u/un9c917fh.css';
import '../../css/w/w5i9gh2gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mopfn8bqt"/><path class="un9c917fh"/><path class="w5i9gh2gf"/></g>`,
		"fallback": "solar:routing-bold-duotone",
	});
}

export default Component;
