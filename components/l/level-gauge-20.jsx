import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6huerbpx.css';
import '../../css/l/li94czbpv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6huerbpx"/><path class="li94czbpv"/>`,
		"fallback": "energy-icons:level-gauge-20",
	});
}

export default Component;
