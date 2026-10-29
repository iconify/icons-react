import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bt2s4pbvn.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/d/dabaijbqi.css';
import '../../css/g/go3ojebxo.css';
import '../../css/s/st_8ncf7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bt2s4pbvn wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="dabaijbqi wm-k"/><path class="go3ojebxo wm-a"/><path class="st_8ncf7j wm-k"/></g>`,
		"fallback": "withicons:sd-card-blueprint",
	});
}

export default Component;
