import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enh3ep69x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="enh3ep69x"/>`,
		"fallback": "wordpress:reusable-block",
	});
}

export default Component;
