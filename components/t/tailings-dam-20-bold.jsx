import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5n3t9bfx.css';
import '../../css/b/btyzzq5no.css';
import '../../css/c/cac_93bho.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5n3t9bfx"/><path class="btyzzq5no"/><path class="cac_93bho"/>`,
		"fallback": "energy-icons:tailings-dam-20-bold",
	});
}

export default Component;
