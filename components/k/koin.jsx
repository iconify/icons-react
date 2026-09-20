import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz2cj4b0b.css';
import '../../css/m/md07ymbpc.css';
import '../../css/k/kc89csb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pz2cj4b0b"/><path clip-rule="evenodd" class="md07ymbpc"/><path class="kc89csb8l"/>`,
		"fallback": "token:koin",
	});
}

export default Component;
