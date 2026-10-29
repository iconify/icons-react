import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pp783-bfu.css';
import '../../css/l/lq81icb7y.css';
import '../../css/g/g8a39tb1i.css';
import '../../css/b/bjh8xu36u.css';
import '../../css/g/gh305q3ar.css';
import '../../css/v/v-jz6bbtj.css';
import '../../css/v/v5nn20b9a.css';
import '../../css/f/fgcfumbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGx30xCbkT" cx="12" cy="13.4" r="11.9" fx="9.4" fy="8.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="pp783-bfu"/><stop offset=".45" class="pp783-bfu"/><stop offset="1" class="lq81icb7y"/></radialGradient></defs><path class="g8a39tb1i wm-shadow"/><path class="bjh8xu36u wm-a"/><path class="gh305q3ar wm-k"/><path stroke="url(#SVGx30xCbkT)" class="v-jz6bbtj wm-k"/><path stroke="url(#SVGx30xCbkT)" class="v5nn20b9a wm-a"/><path class="fgcfumbnk wm-shine"/></g>`,
		"fallback": "withicons-halloween:italic",
	});
}

export default Component;
