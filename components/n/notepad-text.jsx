import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb5ltkbul.css';
import '../../css/g/g6qgqxezo.css';
import '../../css/v/vioieb06c.css';
import '../../css/p/pfwk5xe4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb5ltkbul wm-a"/><path class="g6qgqxezo wm-a"/><path class="vioieb06c wm-a"/><path class="pfwk5xe4m wm-a"/>`,
		"fallback": "withicons-bauhaus:notepad-text",
	});
}

export default Component;
