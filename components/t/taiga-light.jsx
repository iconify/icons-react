import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s90tedchv.css';
import '../../css/j/jdpagb2-o.css';
import '../../css/m/mam2srhpb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s90tedchv"/><path class="jdpagb2-o"/><path class="mam2srhpb"/>`,
		"fallback": "selfhst:taiga-light",
	});
}

export default Component;
