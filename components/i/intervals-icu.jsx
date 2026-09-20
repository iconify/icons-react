import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f02lo6bya.css';
import '../../css/b/bdrh4zbik.css';

const viewBox = {"width":462.9,"height":462.9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="f02lo6bya"/><path class="bdrh4zbik"/>`,
		"fallback": "selfhst:intervals-icu",
	});
}

export default Component;
