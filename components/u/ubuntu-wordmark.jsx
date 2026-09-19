import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq5ia6bva.css';
import '../../css/d/d9j16w-4q.css';
import '../../css/h/ha7cjabon.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq5ia6bva"/><path class="d9j16w-4q"/><path class="ha7cjabon"/>`,
		"fallback": "devicon:ubuntu-wordmark",
	});
}

export default Component;
