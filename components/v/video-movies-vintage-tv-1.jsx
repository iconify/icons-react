import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx2qpnbam.css';
import '../../css/i/iy_clibkk.css';
import '../../css/n/nxvj60bqk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx2qpnbam"/><path class="iy_clibkk"/><path class="nxvj60bqk"/>`,
		"fallback": "streamline-pixel:video-movies-vintage-tv-1",
	});
}

export default Component;
