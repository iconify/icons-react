import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwn_4r81o.css';
import '../../css/p/pp20uobkg.css';
import '../../css/v/vp3qv7vje.css';
import '../../css/g/gbwjslh8s.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vhpyr0b-r.css';
import '../../css/f/frh-3rblp.css';
import '../../css/h/h0o_k2bfw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwn_4r81o"/><path class="pp20uobkg"/><path class="vp3qv7vje"/><path class="gbwjslh8s"/><g class="jn8qy4bru"><path class="vhpyr0b-r"/><path class="frh-3rblp"/><path class="h0o_k2bfw"/></g>`,
		"fallback": "openmoji:polar-bear",
	});
}

export default Component;
