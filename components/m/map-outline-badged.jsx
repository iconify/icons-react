import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx98j0w7g.css';
import '../../css/h/h72e5ub9z.css';
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
		"content": `<path class="tx98j0w7g"/><path class="h72e5ub9z"/><circle class="clr-i-badge lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:map-outline-badged",
	});
}

export default Component;
