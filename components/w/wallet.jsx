import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4odpfzdb.css';
import '../../css/p/pph7l_o6b.css';
import '../../css/n/n3gkzmbod.css';
import '../../css/v/v9kfhvbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4odpfzdb wm-k"/><path class="pph7l_o6b wm-k"/><path class="n3gkzmbod wm-a"/><path class="v9kfhvbjv wm-a"/>`,
		"fallback": "withicons-bauhaus:wallet",
	});
}

export default Component;
