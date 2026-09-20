import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpk_r1xfw.css';
import '../../css/j/jwxrimbri.css';
import '../../css/r/rsw0cp66o.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpk_r1xfw"/><path class="jwxrimbri"/><path class="rsw0cp66o"/>`,
		"fallback": "thesvg-color:processing",
	});
}

export default Component;
