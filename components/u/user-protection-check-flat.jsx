import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dokkyccux.css';
import '../../css/v/v9abayici.css';
import '../../css/e/e_6u-efff.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dokkyccux"/><path clip-rule="evenodd" class="v9abayici"/><path clip-rule="evenodd" class="e_6u-efff"/></g>`,
		"fallback": "streamline-plump-color:user-protection-check-flat",
	});
}

export default Component;
