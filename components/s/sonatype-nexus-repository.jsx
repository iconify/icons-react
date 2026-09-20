import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecphvhbrv.css';
import '../../css/b/bzxzk3bln.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecphvhbrv"/><path class="bzxzk3bln"/>`,
		"fallback": "selfhst:sonatype-nexus-repository",
	});
}

export default Component;
