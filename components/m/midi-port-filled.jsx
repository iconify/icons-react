import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldfradshm.css';
import '../../css/i/itrl4jbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ldfradshm"/><path class="itrl4jbne"/>`,
		"fallback": "lucide-extended:midi-port-filled",
	});
}

export default Component;
