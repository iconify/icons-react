import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pqn81ab2l.css';
import '../../css/q/qt3_ghwjq.css';
import '../../css/v/vg2dc9z-o.css';
import '../../css/g/ghcq3vt4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="pqn81ab2l"/><path class="qt3_ghwjq wm-k"/><path class="vg2dc9z-o wm-a"/><path class="ghcq3vt4r wm-deco"/></g>`,
		"fallback": "withicons-kawaii:jalebi",
	});
}

export default Component;
