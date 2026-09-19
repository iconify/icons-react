import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfj-kyfix.css';
import '../../css/j/j0hmkbc4a.css';
import '../../css/e/egn_sr01y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nfj-kyfix"/><path clip-rule="evenodd" class="j0hmkbc4a"/><path clip-rule="evenodd" class="egn_sr01y"/>`,
		"fallback": "cuida:monitor-outline",
	});
}

export default Component;
