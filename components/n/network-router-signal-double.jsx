import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/aceyp7b4z.css';
import '../../css/c/c99kczbqs.css';
import '../../css/b/bnri47bch.css';
import '../../css/u/uzlydsbsm.css';
import '../../css/i/il9h-yb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="aceyp7b4z"/><path class="c99kczbqs"/><path class="bnri47bch"/><path class="uzlydsbsm"/><path class="il9h-yb1r"/></g>`,
		"fallback": "streamline-freehand-color:network-router-signal-double",
	});
}

export default Component;
