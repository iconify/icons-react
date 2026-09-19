import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itd9-dnso.css';
import '../../css/t/txhkf0bna.css';
import '../../css/w/wnv60uony.css';
import '../../css/l/loj-b5gjc.css';
import '../../css/b/bf6w7kqtm.css';
import '../../css/u/u1sh0jp5n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="itd9-dnso"/><path class="txhkf0bna"/><path class="wnv60uony"/><path class="loj-b5gjc"/><path class="bf6w7kqtm"/><path class="u1sh0jp5n"/></g>`,
		"fallback": "fluent-emoji-flat:parrot",
	});
}

export default Component;
