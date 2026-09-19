import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjg77eb0q.css';
import '../../css/w/wd6ivha4t.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 yjg77eb0q"/><path class="clr-i-solid clr-i-solid-path-2 wd6ivha4t"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:network-settings-solid",
	});
}

export default Component;
