import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/y/yhqbpfdii.css';
import '../../css/r/runi8cblq.css';
import '../../css/n/nt084-b1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="yhqbpfdii"/><path class="runi8cblq"/><path class="nt084-b1j"/></g>`,
		"fallback": "streamline-cyber:video-player-1",
	});
}

export default Component;
