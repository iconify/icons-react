import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_oaq9bhw.css';
import '../../css/t/t_82l-4pq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_oaq9bhw"/><path clip-rule="evenodd" class="t_82l-4pq"/>`,
		"fallback": "teenyicons:safe-solid",
	});
}

export default Component;
