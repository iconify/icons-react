import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5zb0lb0o.css';
import '../../css/n/nlgid0bsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5zb0lb0o"/><path clip-rule="evenodd" class="nlgid0bsv"/>`,
		"fallback": "si:train-fill",
	});
}

export default Component;
