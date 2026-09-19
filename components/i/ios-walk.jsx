import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-khpc3zq.css';
import '../../css/i/igluedbcz.css';
import '../../css/i/ij3sbybka.css';
import '../../css/d/df3x9fabe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-khpc3zq"/><circle transform="rotate(-80.781 274.673 69.329)" class="igluedbcz"/><path class="ij3sbybka"/><path class="df3x9fabe"/>`,
		"fallback": "ion:ios-walk",
	});
}

export default Component;
