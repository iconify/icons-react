import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6_g96gkl.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6_g96gkl"/><circle class="clr-i-badge lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:map-solid-badged",
	});
}

export default Component;
