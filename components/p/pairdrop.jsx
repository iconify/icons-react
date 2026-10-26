import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgry-2mds.css';
import '../../css/m/m4hhobcxn.css';
import '../../css/c/cx7t3xbre.css';
import '../../css/z/zqrfyfbys.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgry-2mds"/><path class="m4hhobcxn"/><path class="cx7t3xbre"/><path class="zqrfyfbys"/>`,
		"fallback": "thesvg:pairdrop",
	});
}

export default Component;
