import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgijpwp5k.css';
import '../../css/t/thiiq-pob.css';
import '../../css/z/z4pudsboz.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 vgijpwp5k"/><path class="clr-i-outline clr-i-outline-path-2 thiiq-pob"/><path class="clr-i-outline clr-i-outline-path-3 z4pudsboz"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:tasks-line",
	});
}

export default Component;
