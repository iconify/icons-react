import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzw3lfyzm.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nm0upy-ot.css';
import '../../css/s/si_kdro5v.css';
import '../../css/l/llote6btr.css';
import '../../css/i/i08jl4bew.css';
import '../../css/z/zrlh-6b7n.css';
import '../../css/z/zx8tu8xro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary uzw3lfyzm"/><g class="dt0cm9dhy primary"><path class="nm0upy-ot"/><path class="si_kdro5v"/><path class="llote6btr"/><path class="i08jl4bew"/><path class="zrlh-6b7n"/><path class="zx8tu8xro"/></g>`,
		"fallback": "iconaut:semaphore-vertical-duo",
	});
}

export default Component;
