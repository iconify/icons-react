import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi5iwqbby.css';
import '../../css/q/qqdx66bkk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi5iwqbby"/><path class="qqdx66bkk"/>`,
		"fallback": "devicon-plain:vagrant-wordmark",
	});
}

export default Component;
