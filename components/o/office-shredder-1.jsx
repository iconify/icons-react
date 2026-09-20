import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/blvqrmbuc.css';
import '../../css/s/s_u7kz7uj.css';
import '../../css/r/ruhx5ib9r.css';
import '../../css/l/la5s4p9kx.css';
import '../../css/o/o9l509dbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="blvqrmbuc"/><path class="s_u7kz7uj"/><path class="ruhx5ib9r"/><path class="la5s4p9kx"/><path class="o9l509dbn"/></g>`,
		"fallback": "streamline-freehand-color:office-shredder-1",
	});
}

export default Component;
