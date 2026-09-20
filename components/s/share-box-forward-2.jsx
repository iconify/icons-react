import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/brxw25bah.css';
import '../../css/i/iz8lmebsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="brxw25bah"/><path class="iz8lmebsq"/></g>`,
		"fallback": "streamline-cyber:share-box-forward-2",
	});
}

export default Component;
