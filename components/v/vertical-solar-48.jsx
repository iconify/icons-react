import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxd5-pbku.css';
import '../../css/f/fblpe-b2f.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxd5-pbku"/><path class="fblpe-b2f"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:vertical-solar-48",
	});
}

export default Component;
