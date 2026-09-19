import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfh7s4zzd.css';
import '../../css/q/q6j6r4b5p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfh7s4zzd"/><path class="q6j6r4b5p"/>`,
		"fallback": "devicon:jamstack-wordmark",
	});
}

export default Component;
