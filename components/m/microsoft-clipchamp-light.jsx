import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebnq89bkg.css';
import '../../css/c/c03ahsjyw.css';
import '../../css/t/t98npfuxz.css';
import '../../css/p/pyxl_o00f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebnq89bkg"/><path class="c03ahsjyw"/><path class="t98npfuxz"/><path class="pyxl_o00f"/>`,
		"fallback": "selfhst:microsoft-clipchamp-light",
	});
}

export default Component;
