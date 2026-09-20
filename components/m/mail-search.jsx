import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xbtzhdc8r.css';
import '../../css/t/tcotrub1g.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/v/v9z7ezbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xbtzhdc8r"/><path class="tcotrub1g"/><circle class="ez1x61b2a"/><path class="v9z7ezbah"/></g>`,
		"fallback": "lucide:mail-search",
	});
}

export default Component;
