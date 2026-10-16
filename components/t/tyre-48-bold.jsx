import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moyoz5fkv.css';
import '../../css/e/e54qfbcyw.css';
import '../../css/o/ol4lf3bik.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moyoz5fkv"/><path class="e54qfbcyw"/><path class="ol4lf3bik"/>`,
		"fallback": "energy-icons:tyre-48-bold",
	});
}

export default Component;
