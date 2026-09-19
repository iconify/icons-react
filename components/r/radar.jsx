import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/h/hdbo47bvw.css';
import '../../css/s/sj79gqg8h.css';
import '../../css/c/cw7--kf9r.css';
import '../../css/h/hqk9m8ngc.css';
import '../../css/m/mo3pxd2af.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path clip-rule="evenodd" class="hdbo47bvw"/><path clip-rule="evenodd" class="sj79gqg8h"/><path class="cw7--kf9r"/><path class="hqk9m8ngc"/><path class="mo3pxd2af"/></g>`,
		"fallback": "icon-park-outline:radar",
	});
}

export default Component;
