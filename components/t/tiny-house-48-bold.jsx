import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mner4y11d.css';
import '../../css/i/ibp47861c.css';
import '../../css/m/mkkw_jb7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mner4y11d"/><path class="ibp47861c"/><path class="mkkw_jb7z"/>`,
		"fallback": "energy-icons:tiny-house-48-bold",
	});
}

export default Component;
