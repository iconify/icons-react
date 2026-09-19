import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-lopnnqb.css';
import '../../css/w/win9rhm6g.css';
import '../../css/n/nrkn4rbjl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n-lopnnqb"/><path clip-rule="evenodd" class="win9rhm6g"/><path class="nrkn4rbjl"/>`,
		"fallback": "devicon:nixos-wordmark",
	});
}

export default Component;
