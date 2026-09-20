import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_936xi-v.css';
import '../../css/c/caqza3bpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_936xi-v"/><path class="caqza3bpn"/>`,
		"fallback": "stash:search-results-light",
	});
}

export default Component;
