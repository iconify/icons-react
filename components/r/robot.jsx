import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fgn4zzbxd.css';
import '../../css/b/b7b6egbjf.css';
import '../../css/n/nvukm8ejr.css';
import '../../css/n/nshm1nb1i.css';
import '../../css/d/dx6zqbcdw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fgn4zzbxd"/><path class="b7b6egbjf"/><path class="nvukm8ejr"/><path class="nshm1nb1i"/><path class="dx6zqbcdw"/></g>`,
		"fallback": "fluent-emoji-flat:robot",
	});
}

export default Component;
