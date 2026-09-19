import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mnx9fobfp.css';
import '../../css/v/vmlbzhbsz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mnx9fobfp"/><path class="vmlbzhbsz"/></g>`,
		"fallback": "devicon:neo4j-wordmark",
	});
}

export default Component;
