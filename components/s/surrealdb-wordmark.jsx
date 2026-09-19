import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta51_fbxd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta51_fbxd"/>`,
		"fallback": "devicon-plain:surrealdb-wordmark",
	});
}

export default Component;
