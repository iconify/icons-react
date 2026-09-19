import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puuv1qb4b.css';
import '../../css/l/ley2zzm8d.css';
import '../../css/e/ezne57fdv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="puuv1qb4b"/><path class="ley2zzm8d"/><path class="ezne57fdv"/></g>`,
		"fallback": "fluent-emoji-flat:magnifying-glass-tilted-left",
	});
}

export default Component;
