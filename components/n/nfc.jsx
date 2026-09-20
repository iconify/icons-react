import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/elmahibhz.css';
import '../../css/b/bv0zn2b4a.css';
import '../../css/n/nwos94z9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="elmahibhz"/><path class="bv0zn2b4a"/><path class="nwos94z9z"/></g>`,
		"fallback": "tabler:nfc",
	});
}

export default Component;
