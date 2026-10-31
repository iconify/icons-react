import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdkvhrb6r.css';
import '../../css/p/pv9u-rb9t.css';
import '../../css/f/f839d4bkr.css';
import '../../css/s/sn3nb_u0r.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdkvhrb6r"/><path class="pv9u-rb9t"/><path class="f839d4bkr"/><path class="sn3nb_u0r"/>`,
		"fallback": "tabler-flags:tanzania",
	});
}

export default Component;
