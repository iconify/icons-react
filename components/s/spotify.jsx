import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evf4ks.css';
import '../../css/p/psjrum.css';
import '../../css/j/j3df0o.css';
import '../../css/u/uzlaax.css';
import '../../css/t/t5hnje.css';
import '../../css/s/so-from-66.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evf4ks psjrum"/><path class="evf4ks j3df0o"/><path class="evf4ks uzlaax"/><path class="evf4ks t5hnje"/>`,
		"fallback": "line-md:spotify",
	});
}

export default Component;
