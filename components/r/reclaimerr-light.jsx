import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lscw_8blz.css';
import '../../css/c/cgqm05v5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lscw_8blz"/><path class="cgqm05v5i"/>`,
		"fallback": "selfhst:reclaimerr-light",
	});
}

export default Component;
