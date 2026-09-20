import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nkpbl8y9v.css';
import '../../css/m/mio52ig2b.css';
import '../../css/e/ez1x61b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nkpbl8y9v"/><circle class="mio52ig2b"/><circle class="ez1x61b2a"/></g>`,
		"fallback": "lucide:user-cog-2",
	});
}

export default Component;
