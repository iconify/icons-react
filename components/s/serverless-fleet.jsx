import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytzcdhe_p.css';
import '../../css/r/rsl89ccpi.css';
import '../../css/g/gxtb8y-ag.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytzcdhe_p"/><path class="rsl89ccpi"/><path class="gxtb8y-ag"/>`,
		"fallback": "carbon:serverless-fleet",
	});
}

export default Component;
