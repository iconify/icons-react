import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iql384b-f.css';
import '../../css/s/s_rsn3foo.css';
import '../../css/k/kn9hn5b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iql384b-f"/><path class="s_rsn3foo"/><path clip-rule="evenodd" class="kn9hn5b8r"/></g>`,
		"fallback": "reicon:suspension-bolt-duotone",
	});
}

export default Component;
