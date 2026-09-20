import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma83kwbzy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma83kwbzy"/>`,
		"fallback": "selfhst:sonatype-nexus-repository-dark",
	});
}

export default Component;
