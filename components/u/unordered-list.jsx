import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvdw8qbce.css';
import '../../css/f/f1llgs4zz.css';
import '../../css/s/sxw6orb1m.css';
import '../../css/c/c7b_kvtiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvdw8qbce"/><circle class="f1llgs4zz"/><circle class="sxw6orb1m"/><circle class="c7b_kvtiu"/>`,
		"fallback": "grommet-icons:unordered-list",
	});
}

export default Component;
