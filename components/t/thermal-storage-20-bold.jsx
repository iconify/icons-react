import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/druapyb0f.css';
import '../../css/p/psdm-j5hl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="druapyb0f"/><path class="psdm-j5hl"/>`,
		"fallback": "energy-icons:thermal-storage-20-bold",
	});
}

export default Component;
