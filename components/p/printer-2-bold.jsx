import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpa070kua.css';
import '../../css/r/rsxgxvbwd.css';
import '../../css/z/z_ydjmbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zpa070kua"/><path class="rsxgxvbwd"/><path class="z_ydjmbtc"/>`,
		"fallback": "solar:printer-2-bold",
	});
}

export default Component;
