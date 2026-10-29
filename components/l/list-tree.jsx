import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdcdetb1t.css';
import '../../css/l/l5cepo42n.css';
import '../../css/d/d2f6tqbma.css';
import '../../css/f/fmevftbqp.css';
import '../../css/d/darpsbb4k.css';
import '../../css/p/pfbbxdb2l.css';
import '../../css/d/df0-jnzum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdcdetb1t wm-shadow"/><path class="l5cepo42n wm-k"/><path class="d2f6tqbma wm-k"/><path class="fmevftbqp wm-a"/><path class="darpsbb4k wm-a"/><path class="pfbbxdb2l wm-a"/><path class="df0-jnzum wm-a"/>`,
		"fallback": "withicons-pastel:list-tree",
	});
}

export default Component;
