import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t54ktca4z.css';
import '../../css/c/cwxo5jb5w.css';
import '../../css/g/gqeq4hb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t54ktca4z"/><path class="cwxo5jb5w"/><path class="gqeq4hb4n"/></g>`,
		"fallback": "streamline-ultimate:read-email-monitor",
	});
}

export default Component;
