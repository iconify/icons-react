import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7hm2xayt.css';
import '../../css/a/a8wnn-nak.css';
import '../../css/h/h19c08bjb.css';
import '../../css/a/a-ybx00aj.css';
import '../../css/j/jv3vgebal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a7hm2xayt"/><path class="a8wnn-nak"/><path class="h19c08bjb"/><path class="a-ybx00aj"/><path class="jv3vgebal"/></g>`,
		"fallback": "streamline-cyber-color:smiley-love",
	});
}

export default Component;
