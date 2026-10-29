import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xx73ektwa.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/l/la7adt45p.css';
import '../../css/t/tgqlrdb_s.css';
import '../../css/l/ls17j6bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xx73ektwa"/><path class="cf3uzcrzx wm-deco"/><path class="la7adt45p wm-a"/><path class="tgqlrdb_s wm-k"/><path class="ls17j6bym wm-k"/></g>`,
		"fallback": "withicons:star-half-blueprint",
	});
}

export default Component;
