import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/l/lj1vc8a4f.css';
import '../../css/g/gi4a4pb7c.css';

const viewBox = {"width":501,"height":501};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="lj1vc8a4f"/><path class="gi4a4pb7c"/></g>`,
		"fallback": "thesvg-color:mattermost-dark",
	});
}

export default Component;
