import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5wleyipv.css';
import '../../css/u/uxlky7uhp.css';
import '../../css/c/cq11jcb9k.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5wleyipv"/><path class="uxlky7uhp"/><path class="cq11jcb9k"/>`,
		"fallback": "devicon:sonarqube-wordmark",
	});
}

export default Component;
