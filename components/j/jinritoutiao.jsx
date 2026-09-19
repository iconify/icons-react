import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_3qcrb_p.css';
import '../../css/k/kb-ng1w_c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_3qcrb_p"/><path clip-rule="evenodd" class="kb-ng1w_c"/>`,
		"fallback": "icon-park-outline:jinritoutiao",
	});
}

export default Component;
