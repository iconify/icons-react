import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wjpirkbti.css';
import '../../css/k/k2mk84q_o.css';
import '../../css/i/ig21_bcca.css';
import '../../css/h/hsqv0-b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wjpirkbti wm-deco"/><path class="k2mk84q_o wm-deco"/><path class="ig21_bcca wm-k"/><path class="hsqv0-b6f wm-a"/></g>`,
		"fallback": "withicons:superscript-blueprint",
	});
}

export default Component;
