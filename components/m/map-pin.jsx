import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/ue_aoenfo.css';
import '../../css/m/mxwiu7bad.css';
import '../../css/a/avzrcxq9y.css';
import '../../css/h/h8zyowbmm.css';
import '../../css/q/qwnhkbbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ue_aoenfo wm-shadow"/><path class="mxwiu7bad wm-shadow"/><path class="avzrcxq9y"/><path class="h8zyowbmm"/><path class="qwnhkbbux"/></g>`,
		"fallback": "withicons-brutal:map-pin",
	});
}

export default Component;
