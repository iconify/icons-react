import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzh7glb6r.css';
import '../../css/t/tg242fbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="zzh7glb6r"/><path class="tg242fbea"/>`,
		"fallback": "bxs:landscape",
	});
}

export default Component;
