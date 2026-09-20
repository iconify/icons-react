import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgf29cc2c.css';
import '../../css/s/s8or9-btt.css';
import '../../css/s/s-cwl4b5f.css';
import '../../css/w/wo82rkbss.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgf29cc2c"/><path class="s8or9-btt"/><path class="s-cwl4b5f"/><path class="wo82rkbss"/>`,
		"fallback": "selfhst:redis-light",
	});
}

export default Component;
