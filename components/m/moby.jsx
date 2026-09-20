import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkw7-jbie.css';
import '../../css/n/nvnedvrpl.css';
import '../../css/r/r75br4b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkw7-jbie"/><path class="nvnedvrpl"/><path class="r75br4b2z"/>`,
		"fallback": "token:moby",
	});
}

export default Component;
