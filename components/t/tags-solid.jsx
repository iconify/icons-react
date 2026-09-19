import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lis884bqb.css';
import '../../css/j/jp1mmybuc.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 lis884bqb"/><path class="clr-i-solid clr-i-solid-path-1 jp1mmybuc"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:tags-solid",
	});
}

export default Component;
