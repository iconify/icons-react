import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/mzeku7npm.css';
import '../../css/k/kfshcbbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="mzeku7npm"/><path class="kfshcbbxp"/></g>`,
		"fallback": "streamline-cyber:transfer-folder",
	});
}

export default Component;
