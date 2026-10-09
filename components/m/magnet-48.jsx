import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gll0cba2f.css';
import '../../css/z/zmxd02b8b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gll0cba2f"/><path class="zmxd02b8b"/>`,
		"fallback": "energy-icons:magnet-48",
	});
}

export default Component;
