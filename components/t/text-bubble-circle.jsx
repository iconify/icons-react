import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/slegk3slk.css';
import '../../css/s/s02d0qbow.css';
import '../../css/p/pcpc27ofz.css';
import '../../css/n/ngds8nbum.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g transform="translate(3 3)"><path clip-rule="evenodd" class="slegk3slk"/><circle class="s02d0qbow"/><circle class="pcpc27ofz"/><circle class="ngds8nbum"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:text-bubble-circle",
	});
}

export default Component;
