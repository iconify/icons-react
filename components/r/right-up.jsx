import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3fqakbcn.css';
import '../../css/s/s3i81qbkg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3fqakbcn"/><path class="s3i81qbkg"/>`,
		"fallback": "flat-color-icons:right-up",
	});
}

export default Component;
