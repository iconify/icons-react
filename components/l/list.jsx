import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cklkuz5cm.css';
import '../../css/u/u04mw40zl.css';
import '../../css/x/xh2h04buo.css';
import '../../css/j/jknzmzbge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cklkuz5cm wm-a"/><path class="u04mw40zl wm-a"/><path class="wm-a xh2h04buo"/><path class="jknzmzbge wm-k"/>`,
		"fallback": "withicons-bauhaus:list",
	});
}

export default Component;
