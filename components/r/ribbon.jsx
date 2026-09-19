import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt8_63gik.css';
import '../../css/a/a2pc2urid.css';
import '../../css/q/qkkblme1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt8_63gik"/><ellipse class="a2pc2urid"/><path class="qkkblme1u"/>`,
		"fallback": "famicons:ribbon",
	});
}

export default Component;
