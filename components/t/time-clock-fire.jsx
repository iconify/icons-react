import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/snxz6qb1l.css';
import '../../css/n/nix-n4bpo.css';
import '../../css/j/jumcysgyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="snxz6qb1l"/><path class="nix-n4bpo"/><path class="jumcysgyz"/></g>`,
		"fallback": "streamline-ultimate:time-clock-fire",
	});
}

export default Component;
