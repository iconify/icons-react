import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc9y20byl.css';
import '../../css/p/p4w9xabzc.css';
import '../../css/k/ki0n9xumn.css';
import '../../css/d/d1_f_v9ty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc9y20byl"/><path class="p4w9xabzc"/><path class="ki0n9xumn"/><path class="d1_f_v9ty"/>`,
		"fallback": "withicons-bauhaus:signal",
	});
}

export default Component;
