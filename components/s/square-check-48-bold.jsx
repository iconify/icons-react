import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_z88zi0a.css';
import '../../css/g/ga3uofb9d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_z88zi0a"/><path class="ga3uofb9d"/>`,
		"fallback": "energy-icons:square-check-48-bold",
	});
}

export default Component;
