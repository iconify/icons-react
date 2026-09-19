import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecffrn81e.css';
import '../../css/z/zzs6n-cer.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ecffrn81e"/><path class="zzs6n-cer"/>`,
		"fallback": "famicons:medkit-outline",
	});
}

export default Component;
