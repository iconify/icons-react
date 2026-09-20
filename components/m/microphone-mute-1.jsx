import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/s/sarfevgqw.css';
import '../../css/c/cpdpr_btj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="sarfevgqw"/><path class="cpdpr_btj"/></g>`,
		"fallback": "streamline-cyber:microphone-mute-1",
	});
}

export default Component;
