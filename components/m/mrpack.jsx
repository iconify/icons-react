import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx-_ic5tj.css';

const viewBox = {"width":514,"height":514};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx-_ic5tj"/>`,
		"fallback": "material-icon-theme:mrpack",
	});
}

export default Component;
