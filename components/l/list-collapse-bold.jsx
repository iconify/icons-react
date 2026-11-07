import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciiy6eb2c.css';
import '../../css/u/u03upyb7p.css';
import '../../css/b/bg1rqybfc.css';
import '../../css/w/wabinmgoi.css';
import '../../css/t/t5ovb-bau.css';
import '../../css/z/zi6r62nwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciiy6eb2c"/><path class="u03upyb7p"/><path class="bg1rqybfc"/><path class="wabinmgoi"/><path class="t5ovb-bau"/><path class="zi6r62nwx"/>`,
		"fallback": "solar:list-collapse-bold",
	});
}

export default Component;
