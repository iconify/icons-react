import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gmpq7liur.css';
import '../../css/g/g7infcc-q.css';
import '../../css/t/t218te2ox.css';
import '../../css/o/ogk9prbik.css';
import '../../css/w/womszacoh.css';
import '../../css/z/zktokqv7y.css';
import '../../css/p/p7a2_jb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="gmpq7liur wm-deco"/><path class="g7infcc-q wm-deco"/><path class="t218te2ox wm-deco"/><path class="ogk9prbik wm-k"/><path class="wm-a womszacoh"/><path class="wm-s zktokqv7y"/><path class="p7a2_jb0n wm-a"/></g>`,
		"fallback": "withicons:reindeer-blueprint",
	});
}

export default Component;
