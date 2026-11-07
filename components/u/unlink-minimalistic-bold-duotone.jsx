import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/oq9c_3bzv.css';
import '../../css/t/t_ro0pywx.css';
import '../../css/k/k6yq07j7l.css';
import '../../css/b/bfepucbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="oq9c_3bzv"/><path class="t_ro0pywx"/></g><path class="k6yq07j7l"/><path class="bfepucbwy"/>`,
		"fallback": "solar:unlink-minimalistic-bold-duotone",
	});
}

export default Component;
