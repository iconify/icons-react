import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzs4d4blu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzs4d4blu"/>`,
		"fallback": "devicon-plain:pyscript-wordmark",
	});
}

export default Component;
