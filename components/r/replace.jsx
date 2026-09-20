import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vsir0k33t.css';
import '../../css/a/a-salgpgm.css';
import '../../css/v/velahuttd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vsir0k33t"/><path class="a-salgpgm"/><rect class="velahuttd"/></g>`,
		"fallback": "lucide:replace",
	});
}

export default Component;
