import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ky_q8kfov.css';
import '../../css/z/zoayn0ldj.css';
import '../../css/y/y9s2ye_ps.css';
import '../../css/z/znealtm7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ky_q8kfov"/><path class="zoayn0ldj"/><path class="y9s2ye_ps"/><path class="znealtm7o"/></g>`,
		"fallback": "streamline-cyber-color:treasure-chest-open",
	});
}

export default Component;
