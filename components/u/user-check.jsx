import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4tohbccz.css';
import '../../css/m/mcj8uxbod.css';
import '../../css/h/hksbzx4ix.css';
import '../../css/p/psynymb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4tohbccz wm-k"/><path class="mcj8uxbod wm-k"/><path class="hksbzx4ix wm-s"/><path class="psynymb7d wm-s"/>`,
		"fallback": "withicons-bauhaus:user-check",
	});
}

export default Component;
