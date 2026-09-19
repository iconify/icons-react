import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/u3p9f6bio.css';
import '../../css/v/vzydv6hlq.css';
import '../../css/k/kym7xq7br.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="u3p9f6bio"/><circle transform="rotate(-90 37 8.944)" class="vzydv6hlq"/><path class="kym7xq7br"/></g>`,
		"fallback": "icon-park-solid:split-turn-down-left",
	});
}

export default Component;
