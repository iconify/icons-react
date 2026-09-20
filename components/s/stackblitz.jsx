import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iemuli1sv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iemuli1sv"/>`,
		"fallback": "material-icon-theme:stackblitz",
	});
}

export default Component;
