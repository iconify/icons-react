import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kihydrb9x.css';
import '../../css/s/s1r84oshw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kihydrb9x"/><path class="s1r84oshw"/>`,
		"fallback": "lets-icons:moon-duotone",
	});
}

export default Component;
