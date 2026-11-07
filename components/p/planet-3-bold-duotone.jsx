import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azy1lpbdu.css';
import '../../css/x/xwsg8i03s.css';
import '../../css/k/knfcb1bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azy1lpbdu"/><path class="xwsg8i03s"/><path class="knfcb1bra"/>`,
		"fallback": "solar:planet-3-bold-duotone",
	});
}

export default Component;
