import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/z2zwkgb7t.css';
import '../../css/b/b45gn-bpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="z2zwkgb7t"/><path class="b45gn-bpm"/></g>`,
		"fallback": "codex:skip-back",
	});
}

export default Component;
