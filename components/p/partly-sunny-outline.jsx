import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htohhkvke.css';
import '../../css/b/bixpb61-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htohhkvke"/><path class="bixpb61-f"/>`,
		"fallback": "famicons:partly-sunny-outline",
	});
}

export default Component;
