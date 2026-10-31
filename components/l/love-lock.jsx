import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/b/btgjrj04u.css';
import '../../css/r/rxo2zgb6g.css';
import '../../css/h/h7a9wibzd.css';
import '../../css/l/lsx7yjqrf.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="btgjrj04u"/><path class="rxo2zgb6g wm-shine"/><path class="h7a9wibzd wm-k"/><path class="lsx7yjqrf wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:love-lock",
	});
}

export default Component;
