import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmy9nob7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kmy9nob7n"/>`,
		"fallback": "nrk:some-tommelopp-active",
	});
}

export default Component;
