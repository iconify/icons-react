import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nim_7djxm.css';
import '../../css/e/eo3ia5b9f.css';
import '../../css/o/o6c6qfb-a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nim_7djxm"/><path class="eo3ia5b9f"/><path class="o6c6qfb-a"/>`,
		"fallback": "selfhst:registry-console-dark",
	});
}

export default Component;
