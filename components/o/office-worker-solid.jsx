import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2_jtpb_a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p2_jtpb_a"/>`,
		"fallback": "streamline-plump:office-worker-solid",
	});
}

export default Component;
