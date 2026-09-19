import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kunthyb0f.css';
import '../../css/b/bzghj2btg.css';
import '../../css/d/dph_j-9vm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kunthyb0f"/><path class="bzghj2btg"/><path class="dph_j-9vm"/>`,
		"fallback": "devicon:knexjs-wordmark",
	});
}

export default Component;
