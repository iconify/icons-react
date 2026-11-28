import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjzko07kl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ljqma2qlw.css';
import '../../css/r/rro4tf7wv.css';
import '../../css/s/si_kdro5v.css';
import '../../css/z/zrlh-6b7n.css';
import '../../css/s/s44gjmwtx.css';
import '../../css/p/plzwfyb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary xjzko07kl"/><g class="dt0cm9dhy primary"><path class="ljqma2qlw"/><path class="rro4tf7wv"/><path class="si_kdro5v"/><path class="zrlh-6b7n"/><path class="s44gjmwtx"/><path class="plzwfyb6s"/></g>`,
		"fallback": "iconaut:more-horizontal-duo",
	});
}

export default Component;
