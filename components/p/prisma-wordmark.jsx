import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3v_b68vp.css';
import '../../css/b/bcdhxdblm.css';
import '../../css/l/lwi4j495p.css';
import '../../css/d/dko403b3x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3v_b68vp"/><path class="bcdhxdblm"/><path class="lwi4j495p"/><path class="dko403b3x"/>`,
		"fallback": "devicon:prisma-wordmark",
	});
}

export default Component;
