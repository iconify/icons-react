import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/c56_ubc-u.css';
import '../../css/c/canlghato.css';
import '../../css/f/fgd8_4b4i.css';
import '../../css/a/ajopsf-dq.css';
import '../../css/l/l6neakbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="c56_ubc-u"/><path class="canlghato"/><path class="fgd8_4b4i"/><path class="ajopsf-dq"/><path class="l6neakbft"/></g>`,
		"fallback": "streamline-cyber:police",
	});
}

export default Component;
