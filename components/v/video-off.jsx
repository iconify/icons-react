import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/ut275gbvs.css';
import '../../css/q/qa0bhtbaw.css';
import '../../css/l/lqdy3rb7m.css';
import '../../css/f/fn9xzlbpx.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ut275gbvs"/><path class="qa0bhtbaw wm-shine"/><path class="lqdy3rb7m wm-k"/><path class="fn9xzlbpx wm-a"/><path class="qr4ochb5c wm-s"/><path class="jgtis7b9v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:video-off",
	});
}

export default Component;
