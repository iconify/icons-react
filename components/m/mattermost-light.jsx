import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
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
		"content": `<path class="lj1vc8a4f"/><path class="gi4a4pb7c"/>`,
		"fallback": "thesvg-color:mattermost-light",
	});
}

export default Component;
