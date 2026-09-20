import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8a6uobym.css';
import '../../css/s/sz2d54b8l.css';
import '../../css/d/dfc8zzqzj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8a6uobym"/><path class="sz2d54b8l"/><path class="dfc8zzqzj"/>`,
		"fallback": "selfhst:minecraft-creeper-dark",
	});
}

export default Component;
