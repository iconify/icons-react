import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc50gibdd.css';
import '../../css/v/v691k0tbi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rc50gibdd"/><path clip-rule="evenodd" class="v691k0tbi"/>`,
		"fallback": "selfhst:pinepods-dark",
	});
}

export default Component;
