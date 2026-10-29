import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj7dvbcbq.css';
import '../../css/t/tnw5n4brt.css';
import '../../css/d/deaxs3sre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj7dvbcbq wm-k"/><path class="tnw5n4brt wm-a"/><path class="deaxs3sre wm-a"/>`,
		"fallback": "withicons-bauhaus:log-out",
	});
}

export default Component;
