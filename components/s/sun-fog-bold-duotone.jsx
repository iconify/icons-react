import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw41f8bgs.css';
import '../../css/i/i9gimpbfr.css';
import '../../css/k/kx6v47bmq.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kro1k9yfy.css';
import '../../css/l/lraggybja.css';
import '../../css/m/m411t7grf.css';
import '../../css/o/o5kqiel1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tw41f8bgs"/><path clip-rule="evenodd" class="i9gimpbfr"/><path clip-rule="evenodd" class="kx6v47bmq"/><g class="xtpeb-edw"><path class="kro1k9yfy"/><path class="lraggybja"/><path class="m411t7grf"/><path class="o5kqiel1h"/></g>`,
		"fallback": "solar:sun-fog-bold-duotone",
	});
}

export default Component;
