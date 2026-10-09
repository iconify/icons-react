import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7djkybhz.css';
import '../../css/e/e8i4n37kj.css';
import '../../css/z/z0ps7ybaj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7djkybhz"/><path class="e8i4n37kj"/><path class="z0ps7ybaj"/>`,
		"fallback": "energy-icons:scaffolding-20-bold",
	});
}

export default Component;
