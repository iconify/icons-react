import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9u-03p8n.css';
import '../../css/k/keuudrbox.css';
import '../../css/j/js631gbug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q9u-03p8n"/><path class="keuudrbox"/><path class="js631gbug"/>`,
		"fallback": "solar:panel-left-open-bold-duotone",
	});
}

export default Component;
