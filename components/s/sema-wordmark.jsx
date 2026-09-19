import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7_aqub-c.css';
import '../../css/t/tcimq1bdm.css';
import '../../css/x/x3wytyg0f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGrR3hXb3H"><path class="f7_aqub-c"/></clipPath></defs><g clip-path="url(#SVGrR3hXb3H)"><path class="tcimq1bdm"/></g><path class="x3wytyg0f"/>`,
		"fallback": "devicon:sema-wordmark",
	});
}

export default Component;
