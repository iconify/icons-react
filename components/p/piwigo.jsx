import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbijkh5cx.css';
import '../../css/g/gn6k-_cxl.css';
import '../../css/z/zwai74zkw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbijkh5cx"/><path class="gn6k-_cxl"/><circle class="zwai74zkw"/>`,
		"fallback": "selfhst:piwigo",
	});
}

export default Component;
