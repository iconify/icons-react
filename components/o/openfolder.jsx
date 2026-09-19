import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwx73ffxg.css';
import '../../css/e/egqw4un5j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwx73ffxg"/><path class="egqw4un5j"/>`,
		"fallback": "fxemoji:openfolder",
	});
}

export default Component;
