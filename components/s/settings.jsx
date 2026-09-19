import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7d-ndb_c.css';
import '../../css/g/gum_8r72e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="q7d-ndb_c"/><path class="gum_8r72e"/>`,
		"fallback": "ion:settings",
	});
}

export default Component;
