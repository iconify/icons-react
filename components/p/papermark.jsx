import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n11xp5baq.css';
import '../../css/a/a61ltbq0f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="n11xp5baq"/><path class="a61ltbq0f"/>`,
		"fallback": "selfhst:papermark",
	});
}

export default Component;
