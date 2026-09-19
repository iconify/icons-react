import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be77uiblp.css';
import '../../css/n/nwx-alnvf.css';
import '../../css/z/zes_-bvuu.css';
import '../../css/d/dgmop3brn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be77uiblp"/><path class="nwx-alnvf"/><path class="zes_-bvuu"/><path class="dgmop3brn"/>`,
		"fallback": "cbi:kaleidescape",
	});
}

export default Component;
