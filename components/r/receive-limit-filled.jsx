import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxpr3ub_o.css';
import '../../css/r/r7i5_vb5f.css';
import '../../css/m/m7uizyb3h.css';
import '../../css/k/k4vk7r6ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxpr3ub_o"/><path class="r7i5_vb5f"/><path class="m7uizyb3h"/><path class="k4vk7r6ox"/>`,
		"fallback": "bitcoin-icons:receive-limit-filled",
	});
}

export default Component;
