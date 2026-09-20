import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh-xzbcdv.css';
import '../../css/j/jonqcrbqb.css';
import '../../css/v/ve153ofso.css';
import '../../css/t/tze0h7nir.css';
import '../../css/p/p6wj9kbjc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh-xzbcdv"/><path class="jonqcrbqb"/><path class="ve153ofso"/><path class="tze0h7nir"/><path class="p6wj9kbjc"/>`,
		"fallback": "selfhst:microsoft-access-light",
	});
}

export default Component;
