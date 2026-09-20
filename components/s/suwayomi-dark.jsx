import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiz4a2b8e.css';
import '../../css/q/qat5inhjr.css';
import '../../css/s/shtujqapo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iiz4a2b8e"/><circle class="qat5inhjr"/><path class="shtujqapo"/>`,
		"fallback": "selfhst:suwayomi-dark",
	});
}

export default Component;
