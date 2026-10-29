import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgg19vjif.css';
import '../../css/s/s85m2hy_z.css';
import '../../css/x/xrfmnukqn.css';
import '../../css/f/fjgmyccsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgg19vjif wm-k"/><path class="s85m2hy_z wm-a"/><path class="wm-k xrfmnukqn"/><path class="fjgmyccsp wm-a"/>`,
		"fallback": "withicons-bauhaus:utensils",
	});
}

export default Component;
