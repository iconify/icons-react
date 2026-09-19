import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkwtqebyl.css';
import '../../css/h/h08ulmihp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkwtqebyl"/><path class="h08ulmihp"/>`,
		"fallback": "devicon-plain:neo4j",
	});
}

export default Component;
