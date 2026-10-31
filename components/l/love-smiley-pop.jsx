import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ei3ecxn7v.css';
import '../../css/u/ua5_vnboa.css';
import '../../css/m/mul0oivqe.css';
import '../../css/d/dhezjmt0p.css';
import '../../css/c/crhmcbtst.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ei3ecxn7v"/><path class="ua5_vnboa"/><path class="mul0oivqe"/><path clip-rule="evenodd" class="dhezjmt0p"/><path clip-rule="evenodd" class="crhmcbtst"/></g>`,
		"fallback": "streamline-kameleon-color:love-smiley-pop",
	});
}

export default Component;
