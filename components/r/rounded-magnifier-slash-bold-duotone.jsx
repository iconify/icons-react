import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9y477w0i.css';
import '../../css/s/swt0kss-n.css';
import '../../css/u/u32rdbbja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="n9y477w0i"/><path class="swt0kss-n"/><path class="u32rdbbja"/>`,
		"fallback": "solar:rounded-magnifier-slash-bold-duotone",
	});
}

export default Component;
