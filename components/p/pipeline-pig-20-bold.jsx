import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw3g6zbcc.css';
import '../../css/c/cbyfxzbek.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw3g6zbcc"/><path class="cbyfxzbek"/>`,
		"fallback": "energy-icons:pipeline-pig-20-bold",
	});
}

export default Component;
