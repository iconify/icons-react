import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/cnmcgf20t.css';
import '../../css/z/z6fsjrp1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="cnmcgf20t"/><path class="z6fsjrp1f"/></g>`,
		"fallback": "streamline-cyber:water-mug-2",
	});
}

export default Component;
