import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf5sz9i8w.css';
import '../../css/l/l5sm_m-zm.css';
import '../../css/g/gdubncbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf5sz9i8w"/><path class="l5sm_m-zm"/><path class="gdubncbdu"/>`,
		"fallback": "streamline-ultimate:user-signal-1-bold",
	});
}

export default Component;
