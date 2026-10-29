import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om9lxqb-n.css';
import '../../css/k/koo4uzmtu.css';
import '../../css/i/ixqmu64br.css';
import '../../css/k/k_i87wbus.css';
import '../../css/n/n12eunbls.css';
import '../../css/s/sbq06gxks.css';
import '../../css/w/w_bzgjbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om9lxqb-n wm-shadow"/><path class="koo4uzmtu"/><path class="ixqmu64br"/><path class="k_i87wbus"/><path class="n12eunbls"/><path class="sbq06gxks wm-shine"/><path class="w_bzgjbun"/>`,
		"fallback": "withicons-plush:plane",
	});
}

export default Component;
