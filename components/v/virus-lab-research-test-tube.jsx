import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt8szpbyr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wt8szpbyr"/>`,
		"fallback": "healthicons:virus-lab-research-test-tube",
	});
}

export default Component;
