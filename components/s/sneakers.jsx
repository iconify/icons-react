import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/fk0ip-b6z.css';
import '../../css/l/lj-ejx5zr.css';
import '../../css/i/i178ndbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="fk0ip-b6z"/><path class="lj-ejx5zr"/><path class="i178ndbxd"/></g>`,
		"fallback": "streamline-cyber:sneakers",
	});
}

export default Component;
