import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsic9tbse.css';
import '../../css/f/fr9wnwjpk.css';
import '../../css/c/c6vuqnbbq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsic9tbse"/><path class="fr9wnwjpk"/><path class="c6vuqnbbq"/>`,
		"fallback": "selfhst:re-director",
	});
}

export default Component;
