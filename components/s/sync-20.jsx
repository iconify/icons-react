import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-ilkisjd.css';
import '../../css/n/n-b_rl70t.css';
import '../../css/s/s8zhrbi_x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-ilkisjd"/><path class="n-b_rl70t"/><path class="s8zhrbi_x"/>`,
		"fallback": "energy-icons:sync-20",
	});
}

export default Component;
