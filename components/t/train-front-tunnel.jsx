import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bc8t59kfo.css';
import '../../css/n/n4k9xpbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bc8t59kfo"/><path class="n4k9xpbft"/></g>`,
		"fallback": "vadivam:train-front-tunnel",
	});
}

export default Component;
