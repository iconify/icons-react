import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqze8hb0i.css';
import '../../css/x/xsi-ndbpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqze8hb0i"/><path class="xsi-ndbpf"/>`,
		"fallback": "tdesign:location-setting-filled",
	});
}

export default Component;
