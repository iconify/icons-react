import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq2o04i_v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gq2o04i_v"/>`,
		"fallback": "streamline:smiley-mask-remix",
	});
}

export default Component;
