import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i25aembjy.css';
import '../../css/n/nft6utekr.css';
import '../../css/j/j_qak8b2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i25aembjy"/><path class="nft6utekr"/><path class="j_qak8b2i"/></g>`,
		"fallback": "streamline-sharp-color:ribbon-flat",
	});
}

export default Component;
