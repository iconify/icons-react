import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6a9xhbrm.css';
import '../../css/x/x8n4ul95g.css';
import '../../css/k/ksc_xx8rp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6a9xhbrm"/><path class="x8n4ul95g"/><path class="ksc_xx8rp"/>`,
		"fallback": "energy-icons:safe-48-bold",
	});
}

export default Component;
