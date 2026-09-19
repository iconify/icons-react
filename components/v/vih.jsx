import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to2lt32jq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="to2lt32jq"/>`,
		"fallback": "healthicons:vih",
	});
}

export default Component;
