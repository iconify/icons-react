import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6nq6mb0m.css';
import '../../css/l/l73m9po7l.css';
import '../../css/y/ybe6y-5ox.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6nq6mb0m"/><path class="l73m9po7l"/><path class="ybe6y-5ox"/>`,
		"fallback": "devicon:systemd-wordmark",
	});
}

export default Component;
