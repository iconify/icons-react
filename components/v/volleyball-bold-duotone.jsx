import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/lyjoipjzh.css';
import '../../css/s/sygmjqbiz.css';
import '../../css/b/b0ubx3bvg.css';
import '../../css/m/mzvd5t_pb.css';
import '../../css/c/cf_pz1hze.css';
import '../../css/a/ayck09-tp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="lyjoipjzh"/><path class="sygmjqbiz"/><path class="b0ubx3bvg"/><path class="mzvd5t_pb"/></g><g class="xtpeb-edw"><path class="lyjoipjzh"/><path class="sygmjqbiz"/></g><path class="cf_pz1hze"/><path class="ayck09-tp"/>`,
		"fallback": "solar:volleyball-bold-duotone",
	});
}

export default Component;
