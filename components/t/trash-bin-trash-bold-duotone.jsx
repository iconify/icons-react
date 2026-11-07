import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzutfeb8f.css';
import '../../css/d/div7n52ni.css';
import '../../css/g/glzhwh5ys.css';
import '../../css/q/q9c6evmhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzutfeb8f"/><path class="div7n52ni"/><path class="glzhwh5ys"/><path class="q9c6evmhl"/>`,
		"fallback": "solar:trash-bin-trash-bold-duotone",
	});
}

export default Component;
