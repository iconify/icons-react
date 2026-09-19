import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awm81q2hy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awm81q2hy"/>`,
		"fallback": "devicon:liquibase",
	});
}

export default Component;
