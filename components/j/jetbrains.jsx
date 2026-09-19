import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqd53454f.css';
import '../../css/t/ttzgexr7y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqd53454f"/><path class="ttzgexr7y"/>`,
		"fallback": "devicon-plain:jetbrains",
	});
}

export default Component;
