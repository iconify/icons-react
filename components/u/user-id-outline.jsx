import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z75fauo-s.css';
import '../../css/j/js8ji6v_n.css';
import '../../css/l/lbf6xxfir.css';
import '../../css/r/rbayn2s6z.css';
import '../../css/b/b57ew5bmg.css';
import '../../css/u/uq39cqocs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z75fauo-s"/><path clip-rule="evenodd" class="js8ji6v_n"/><path class="lbf6xxfir"/><path class="rbayn2s6z"/><path class="b57ew5bmg"/><path clip-rule="evenodd" class="uq39cqocs"/>`,
		"fallback": "solar:user-id-outline",
	});
}

export default Component;
