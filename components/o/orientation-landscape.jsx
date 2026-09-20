import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bvy5pzboo.css';
import '../../css/y/yi-4oobnu.css';
import '../../css/c/cpeahtb3i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bvy5pzboo"/><path class="yi-4oobnu"/><path class="cpeahtb3i"/></g>`,
		"fallback": "streamline:orientation-landscape",
	});
}

export default Component;
