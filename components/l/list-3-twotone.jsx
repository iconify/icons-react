import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc1v7n.css';
import '../../css/w/w5x6ze.css';
import '../../css/v/vmt83d.css';
import '../../css/m/mfx1yn.css';
import '../../css/p/pij0sj.css';
import '../../css/i/i6qhvc.css';
import '../../css/a/ashj5r.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-28.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc1v7n w5x6ze"/><path class="vmt83d w5x6ze"/><path class="mfx1yn w5x6ze"/><path class="pij0sj w5x6ze"/><path class="i6qhvc w5x6ze"/><path class="ashj5r w5x6ze"/>`,
		"fallback": "line-md:list-3-twotone",
	});
}

export default Component;
